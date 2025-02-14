"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../api/auth";

interface Article {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  created_at: string | null;
  category: string | null;
  show_on_home?: boolean;
}

export default function NajnovijeVestiPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchNajnovije = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("category", "NAJNOVIJE VESTI")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Greška prilikom učitavanja:", error.message);
      } else {
        setArticles((data as Article[]) || []);
      }
    };

    fetchNajnovije();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">NAJNOVIJE VESTI</h1>
      {articles.length === 0 ? (
        <p>Nema članaka u kategoriji NAJNOVIJE VESTI.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {articles.map((article) => (
            <Link key={article.id} href={`/articles/${article.id}`} legacyBehavior>
              <a className="block p-4 bg-transparent border rounded hover:shadow-md transition-shadow">
                {article.image_url && (
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="mb-2 w-full h-48 object-cover rounded-md"
                  />
                )}
                <h3 className="w-full text-xl font-bold mb-2 font-sans">
                  {article.title}
                </h3>
                {article.created_at && (
                  <p className="text-sm text-gray-500">
                    {new Date(article.created_at).toLocaleDateString()}
                  </p>
                )}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
