"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../api/auth";

interface Article {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  featured: boolean;
  created_at: string;
  category?: string | null;
}

interface Props {
  id: string;
}

export default function ClientArticlePage({ id }: Props) {
  const [article, setArticle] = useState<Article | null>(null);
  const [recommended, setRecommended] = useState<Article[]>([]);

  useEffect(() => {
    if (!id) return;
    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Greška pri učitavanju članka:", error.message);
      } else {
        setArticle(data as Article);
      }
    };

    fetchArticle();
  }, [id]);

  useEffect(() => {
    const fetchRecommended = async () => {
      if (!article?.category) return;

      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("category", article.category)
        .neq("id", article.id)
        .order("created_at", { ascending: false })
        .limit(3);

      if (error) {
        console.error("Greška pri rekomendovanima:", error.message);
      } else {
        setRecommended(data as Article[]);
      }
    };

    if (article) fetchRecommended();
  }, [article]);

  if (!article) {
    return <p className="container mx-auto p-4">Učitavanje članka...</p>;
  }

  const formattedDate = new Date(article.created_at).toLocaleDateString("sr-RS", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleShare = (platform: string) => {
    alert(`Implementirati deljenje na ${platform}!`);
  };

  return (
    <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
      <article className="md:w-3/4">
        {article.category && (
          <div className="text-sm text-blue-600 font-semibold uppercase mb-2">
            {article.category}
          </div>
        )}

        <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
          {article.title}
        </h1>

        <p className="text-gray-500 text-sm mb-4">
          Objavljeno: {formattedDate}
        </p>

        {article.image_url && (
          <figure className="mb-4 flex justify-center">
            <img
              src={article.image_url}
              alt={article.title}
              className="max-w-[600px] w-full h-auto object-cover rounded-md"
            />
          </figure>
        )}

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {recommended.length > 0 && (
          <div className="mt-8 pt-4 border-t border-gray-200">
            <h2 className="text-xl font-bold mb-4">Preporučeni članci</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recommended.map((rec) => (
                <a
                  key={rec.id}
                  href={`/articles/${rec.id}`}
                  className="border rounded p-3 hover:shadow-md transition-shadow"
                >
                  {rec.image_url && (
                    <img
                      src={rec.image_url}
                      alt={rec.title}
                      className="mb-2 w-full h-32 object-cover rounded"
                    />
                  )}
                  <h3 className="text-md font-semibold">{rec.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(rec.created_at).toLocaleDateString()}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}
      </article>

      <aside className="md:w-1/4">
        <div className="sticky top-20 space-y-4">
          <div className="border p-4 rounded shadow-sm">
            <h2 className="font-bold mb-2">Podeli vest</h2>
            <button
              onClick={() => handleShare("Facebook")}
              className="block w-full bg-blue-600 text-white py-1 mb-2 rounded hover:bg-blue-700"
            >
              Facebook
            </button>
            <button
              onClick={() => handleShare("Twitter")}
              className="block w-full bg-blue-400 text-white py-1 mb-2 rounded hover:bg-blue-500"
            >
              Twitter
            </button>
            <button
              onClick={() => handleShare("LinkedIn")}
              className="block w-full bg-blue-800 text-white py-1 rounded hover:bg-blue-900"
            >
              LinkedIn
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
