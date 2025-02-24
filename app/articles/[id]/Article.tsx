"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../../api/auth";
import Head from "next/head";

interface Article {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  featured: boolean;
  created_at: string;
  category?: string | null;
}

export default function ArticlePage() {
  const { id } = useParams();
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

  return (
    <>
      <Head>
        <title>{article.title} | Shalom.rs</title>
        <meta name="description" content={article.content.substring(0, 150)} />

        {/* Open Graph Meta Tagovi */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.content.substring(0, 150)} />
        <meta property="og:image" content={article.image_url || "https://www.shalom.rs/default-image.jpg"} />
        <meta property="og:url" content={`https://www.shalom.rs/articles/${article.id}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Shalom.rs" />

        {/* Facebook i Twitter specific meta */}
        <meta property="fb:app_id" content="YOUR_FACEBOOK_APP_ID" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.content.substring(0, 150)} />
        <meta name="twitter:image" content={article.image_url || "https://www.shalom.rs/default-image.jpg"} />
      </Head>

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

          <p className="text-gray-500 text-sm mb-4">Objavljeno: {formattedDate}</p>

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
        </article>
      </div>
    </>
  );
}
