"use client";

import "@/types/quill-setup"; // Uvezi fajl iz foldera "types" koji registruje imageResize modul

import ReactDOM from "react-dom";
if (!(ReactDOM as any).findDOMNode) {
  (ReactDOM as any).findDOMNode = function (component: any) {
    if (component instanceof Element) {
      return component;
    }
    if (component && component.base) {
      return component.base;
    }
    return null;
  };
}

import { useEffect, useState } from "react";
import { supabase } from "../api/auth";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// Uvezi ReactQuill dinamički (samo na klijentskoj strani)
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Definiši custom toolbar module za ReactQuill
const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }], // Poravnanje: levo, centrirano, desno, justified
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
    handlers: {
      image: function () {
        const quill = (this as any).quill;
        const range = quill.getSelection();
        const value = prompt("Unesite URL slike:");
        if (value) {
          quill.insertEmbed(range.index, "image", value, "user");
        }
      },
    },
  },
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "list",
  "bullet",
  "link",
  "image",
];

interface Article {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  featured: boolean;
  category: string | null;
  show_on_home?: boolean;   // polje iz baze (snake_case: show_on_home)
  created_at?: string;      // da možemo sortirati i prikazati datum
}

export default function AdminPage() {
  const [user, setUser] = useState<{ email: string | null | undefined } | null>(
    null
  );
  const [articles, setArticles] = useState<Article[]>([]);

  // States za formu
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [featured, setFeatured] = useState(false);
  const [category, setCategory] = useState("HOME");

  // React state za polje showOnHome (CamelCase)
  const [showOnHome, setShowOnHome] = useState(false);

  const [editingArticle, setEditingArticle] = useState<Article | null>(null);

  // Pomoćni states
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false); // da li prikazujemo formu?
  const [searchTerm, setSearchTerm] = useState(""); // za pretragu po naslovu

  const router = useRouter();

  // Proveravamo korisnika
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data || !data.user) {
        router.push("/login");
      } else {
        setUser({ email: data.user.email });
      }
    };
    getUser();
  }, [router]);

  // Učitavamo sve članke (sortirano)
  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error.message);
      } else {
        setArticles(data || []);
      }
    };
    fetchArticles();
  }, [message]);

  // Kreiramo novi članak
  const handleAddArticle = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prilikom inserta, u Supabase kolonu 'show_on_home' šaljemo vrednost showOnHome
    const { error } = await supabase.from("articles").insert([
      {
        title,
        content,
        image_url: imageUrl,
        featured,
        category,
        // Važno: show_on_home (snace-case) = showOnHome (camelCase state)
        show_on_home: showOnHome,
      },
    ]);

    if (error) {
      setMessage("Greška prilikom dodavanja članka.");
      console.error(error.message);
    } else {
      setMessage("Članak uspešno dodat.");
      // Resetujemo formu
      resetForm();
      setShowForm(false);
    }
  };

  // Brisanje
  const handleDeleteArticle = async (id: string) => {
    const { error } = await supabase.from("articles").delete().eq("id", id);
    if (error) {
      setMessage("Greška prilikom brisanja članka.");
      console.error(error.message);
    } else {
      setMessage("Članak uspešno obrisan.");
      setArticles((prev) => prev.filter((a) => a.id !== id));
    }
  };

  // Klik na "Uredi"
  const handleEditClick = (article: Article) => {
    setEditingArticle(article);
    setTitle(article.title);
    setContent(article.content);
    setImageUrl(article.image_url || "");
    setFeatured(article.featured);
    setCategory(article.category || "HOME");

    // Važno: localState = polje iz article.show_on_home
    setShowOnHome(article.show_on_home || false);

    setShowForm(true);
  };

  // Ažuriranje
  const handleUpdateArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingArticle) return;

    const { error } = await supabase
      .from("articles")
      .update({
        title,
        content,
        image_url: imageUrl,
        featured,
        category,
        // ponovo: show_on_home = local showOnHome
        show_on_home: showOnHome,
      })
      .eq("id", editingArticle.id);

    if (error) {
      setMessage("Greška prilikom ažuriranja članka.");
      console.error(error.message);
    } else {
      setMessage("Članak uspešno ažuriran.");
      resetForm();
      setShowForm(false);
    }
  };

  // Reset forma
  const resetForm = () => {
    setEditingArticle(null);
    setTitle("");
    setContent("");
    setImageUrl("");
    setFeatured(false);
    setCategory("HOME");
    setShowOnHome(false);
  };

  // Odustani
  const handleCancel = () => {
    resetForm();
    setShowForm(false);
  };

  // Pretraga po naslovu
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!user) return <p>Učitavanje...</p>;

  return (
    <div className="container mx-auto p-4">
      {/* HEADER Admin Panela */}
      <h1 className="text-2xl font-bold mb-4">Dobrodošao, {user.email}</h1>
      <p>Ovo je Admin Panel, dostupan samo prijavljenim korisnicima.</p>
      <button
        onClick={async () => {
          await supabase.auth.signOut();
          router.push("/login");
        }}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-4"
      >
        Odjavi se
      </button>

      {/* Dugme za kreiranje novog članka + search bar */}
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={() => {
            // Otvori formu za dodavanje novog članka
            resetForm();
            setShowForm(true);
          }}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Dodaj novi članak
        </button>
        <input
          type="text"
          placeholder="Pretraži po naslovu..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-3 w-1/2 ml-4"
        />
      </div>

      {/* PRIKAZ LISTE ČLANAKA (TABELA) */}
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left border-b">Naslov</th>
              <th className="px-4 py-2 text-left border-b">Kategorija</th>
              <th className="px-4 py-2 text-left border-b">Datum kreiranja</th>
              <th className="px-4 py-2 text-left border-b">Uredi</th>
              <th className="px-4 py-2 text-left border-b">Obriši</th>
            </tr>
          </thead>
          <tbody>
            {filteredArticles.map((article) => (
              <tr key={article.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">
                  <div className="font-medium">{article.title}</div>
                </td>
                <td className="px-4 py-2 border-b">
                  {article.category || "HOME"}
                </td>
                <td className="px-4 py-2 border-b">
                  {article.created_at
                    ? new Date(article.created_at).toLocaleString()
                    : "N/A"}
                </td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => handleEditClick(article)}
                    className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600"
                  >
                    Uredi
                  </button>
                </td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => handleDeleteArticle(article.id)}
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                  >
                    Obriši
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FORMA ZA DODAVANJE / IZMENU (prikazuje se samo ako showForm=true) */}
      {showForm && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-bold mb-4">
            {editingArticle ? "Uredi članak" : "Dodaj novi članak"}
          </h2>
          <form
            onSubmit={editingArticle ? handleUpdateArticle : handleAddArticle}
            className="space-y-4"
          >
            {/* Naslov */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Naslov
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
            {/* Sadržaj */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sadržaj{" "}
                <span className="text-xs text-gray-500">
                  (koristite Markdown ili formatiranje)
                </span>
              </label>
              <ReactQuill
                value={content}
                onChange={setContent}
                placeholder="Unesite sadržaj..."
                className="mt-1 block w-full"
                modules={modules}
                formats={formats}
              />
            </div>
            {/* URL fotografije */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                URL Fotografije
              </label>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            {/* Istaknuti članak */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Istaknuti članak
              </label>
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="mt-1"
              />
            </div>
            {/* Kategorija */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Kategorija
              </label>
              <select
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="HOME">HOME (Naslovna)</option>
                <option value="KULTURA">KULTURA</option>
                <option value="HOLOKAUST">HOLOKAUST</option>
                <option value="BLOG">BLOG</option>
                <option value="ISTORIJA">ISTORIJA</option>
                <option value="RELIGIJA">RELIGIJA</option>
                <option value="UMETNOST">UMETNOST</option>
                <option value="NAJNOVIJE VESTI">NAJNOVIJE VESTI</option>
              </select>
            </div>
            {/* Prikaži i na Naslovnoj? */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Prikaži i na Naslovnoj?
              </label>
              <input
                type="checkbox"
                checked={showOnHome}
                onChange={(e) => setShowOnHome(e.target.checked)}
                className="mt-1"
              />
            </div>

            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                {editingArticle ? "Ažuriraj članak" : "Dodaj članak"}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Odustani
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Poruka (o uspehu, grešci) */}
      {message && <p className="text-green-500 mt-4">{message}</p>}
    </div>
  );
}
