"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Interfejs za članke
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

export default function MainFeedClient({ articles }: { articles: Article[] }) {
  const [visibleCount, setVisibleCount] = useState<number>(8);

  // Ako imate logiku “Load More”
  const loadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const mainFeedVisible = articles.slice(0, visibleCount);

  return (
    <div>
      {/* gap-4 da članci ne budu spojeni */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {mainFeedVisible.map((article) => (
          <Link key={article.id} href={`/articles/${article.id}`} legacyBehavior>
            <a className="block">
              {article.image_url && (
                <img
                  src={article.image_url}
                  alt={article.title ?? "Članak"}
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

      {/* Dugme Load More (ako ima još članaka) */}
      {visibleCount < articles.length && (
        <div className="mt-4 text-center">
          <button
            onClick={loadMore}
            className="px-4 py-2 bg-yellow-300 text-black rounded hover:bg-yellow-400 font-bold text-xl"
          >
            UČITAJ JOŠ
          </button>
        </div>
      )}
    </div>
  );
}
