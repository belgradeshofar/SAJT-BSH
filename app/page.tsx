import { supabase } from "./api/auth";
import Slider from "./components/Slider";
import MainFeedClient from "./components/MainFeedClient";

export const revalidate = 60; // Opcionalno, SSG + ISR na 60s

interface Article {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  featured: boolean;
  created_at: string | null;
  category: string | null;
  show_on_home?: boolean;
}

// Pomoćna funkcija za mešanje (Fisher-Yates shuffle)
function shuffle(array: Article[]): Article[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

// Componenta za prikaz rubrike (npr. KULTURA) sa dva članka i linkom "VIŠE"
function CategoryBlock({
  articles,
  label,
  href,
}: {
  articles: Article[];
  label: string;
  href: string;
}) {
  if (articles.length === 0) return null;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold">{label}</h2>
        <a
          href={href}
          className="font-sans uppercase text-black inline-flex items-center transition duration-200 group hover:text-gray-700"
        >
          VIŠE
          <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {articles.map((article) => (
          <a key={article.id} href={`/articles/${article.id}`} className="block">
            {article.image_url && (
              <img
                src={article.image_url}
                alt={article.title ?? "Članak"}
                className="mb-2 w-full h-32 object-cover rounded"
              />
            )}
            <h3 className="font-semibold">{article.title}</h3>
            {article.created_at && (
              <p className="text-xs text-gray-500">
                {new Date(article.created_at).toLocaleDateString()}
              </p>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

// Mobilni layout: sadržaj se prikazuje u jednoj koloni
function MobileLayout({
  mainFeed,
  kulturaArticles,
  istorijaArticles,
  holokaustArticles,
  religijaArticles,
  umetnostArticles,
  blogArticles,
}: {
  mainFeed: Article[];
  kulturaArticles: Article[];
  istorijaArticles: Article[];
  holokaustArticles: Article[];
  religijaArticles: Article[];
  umetnostArticles: Article[];
  blogArticles: Article[];
}) {
  return (
    <div className="md:hidden flex flex-col">
      <Slider />
      <div className="mt-1">
        <MainFeedClient articles={mainFeed} />
      </div>
      <div className="mt-2">
        <CategoryBlock articles={kulturaArticles} label="KULTURA" href="/kultura" />
        <CategoryBlock articles={istorijaArticles} label="ISTORIJA" href="/istorija" />
        <CategoryBlock articles={holokaustArticles} label="HOLOKAUST" href="/holokaust" />
        <CategoryBlock articles={religijaArticles} label="RELIGIJA" href="/religija" />
        <CategoryBlock articles={umetnostArticles} label="UMETNOST" href="/umetnost" />
        <CategoryBlock articles={blogArticles} label="BLOG" href="/blog" />
      </div>
    </div>
  );
}

// Desktop layout: leva kolona sa slajderom i rubrikama, desna kolona sa glavnim feed-om
function DesktopLayout({
  mainFeed,
  kulturaArticles,
  istorijaArticles,
  holokaustArticles,
  religijaArticles,
  umetnostArticles,
  blogArticles,
}: {
  mainFeed: Article[];
  kulturaArticles: Article[];
  istorijaArticles: Article[];
  holokaustArticles: Article[];
  religijaArticles: Article[];
  umetnostArticles: Article[];
  blogArticles: Article[];
}) {
  return (
    <div className="hidden md:flex md:flex-row">
      {/* Leva kolona: Slajder i rubrike */}
      <div className="w-1/2 pr-4 flex flex-col">
        <Slider />
        <div className="mt-4">
          <CategoryBlock articles={kulturaArticles} label="KULTURA" href="/kultura" />
          <CategoryBlock articles={istorijaArticles} label="ISTORIJA" href="/istorija" />
          <CategoryBlock articles={holokaustArticles} label="HOLOKAUST" href="/holokaust" />
          <CategoryBlock articles={religijaArticles} label="RELIGIJA" href="/religija" />
          <CategoryBlock articles={umetnostArticles} label="UMETNOST" href="/umetnost" />
          <CategoryBlock articles={blogArticles} label="BLOG" href="/blog" />
        </div>
      </div>

      {/* Desna kolona: Glavni feed */}
      <div className="w-1/2">
        <MainFeedClient articles={mainFeed} />
      </div>
    </div>
  );
}

// Glavna server komponenta
export default async function HomePage() {
  // Dohvat članaka sa servera
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Greška:", error.message);
    return <main>Greška prilikom učitavanja članaka.</main>;
  }

  const allArticles = (data as Article[]) || [];

  // Glavni feed: članak koji treba prikazati na početnoj stranici
  const mainFeed = allArticles.filter(
    (article) => article.category === "HOME" || article.show_on_home
  );

  // Rubrike: mešamo i uzimamo po 2 članka za svaku kategoriju
  const kulturaArticles = shuffle(allArticles.filter((a) => a.category === "KULTURA")).slice(0, 2);
  const istorijaArticles = shuffle(allArticles.filter((a) => a.category === "ISTORIJA")).slice(0, 2);
  const holokaustArticles = shuffle(allArticles.filter((a) => a.category === "HOLOKAUST")).slice(0, 2);
  const religijaArticles = shuffle(allArticles.filter((a) => a.category === "RELIGIJA")).slice(0, 2);
  const umetnostArticles = shuffle(allArticles.filter((a) => a.category === "UMETNOST")).slice(0, 2);
  const blogArticles = shuffle(allArticles.filter((a) => a.category === "BLOG")).slice(0, 2);

  return (
    <main className="container mx-auto p-4">
      {/* Mobilni layout */}
      <MobileLayout
        mainFeed={mainFeed}
        kulturaArticles={kulturaArticles}
        istorijaArticles={istorijaArticles}
        holokaustArticles={holokaustArticles}
        religijaArticles={religijaArticles}
        umetnostArticles={umetnostArticles}
        blogArticles={blogArticles}
      />
      {/* Desktop layout */}
      <DesktopLayout
        mainFeed={mainFeed}
        kulturaArticles={kulturaArticles}
        istorijaArticles={istorijaArticles}
        holokaustArticles={holokaustArticles}
        religijaArticles={religijaArticles}
        umetnostArticles={umetnostArticles}
        blogArticles={blogArticles}
      />
    </main>
  );
}
