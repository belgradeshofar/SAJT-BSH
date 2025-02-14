"use client";

import { useEffect, useState } from "react";
import { supabase } from "../api/auth";
import Link from "next/link";

interface Article {
  id: string;
  title: string;
  content: string;
  image_url: string;
  featured: boolean;
  created_at: string;
}

export default function SliderHeader() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("featured", true)
        .order("created_at", { ascending: false })
        .limit(6);

      if (error) {
        console.error("Greška prilikom učitavanja istaknutih članaka:", error.message);
      } else {
        setArticles(data || []);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 5000); // automatsko menjanje svakih 5 sekundi
    return () => clearInterval(interval);
  }, [articles.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  return (
    <div
      className="relative w-full overflow-hidden h-[250px] md:h-[300px] lg:h-[400px]"
      style={{ minHeight: "300px" }}
    >
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {articles.map((article) => (
          <Link key={article.id} href={`/articles/${article.id}`} legacyBehavior>
            <a className="block flex-shrink-0 w-full relative">
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full object-cover rounded-md h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">{article.title}</h2>
                {article.created_at && (
                  <p className="mt-1 text-[0.7rem] md:text-xs lg:text-sm">
                    {new Date(article.created_at).toLocaleDateString()}
                  </p>
                )}
              </div>
            </a>
          </Link>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-800"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-800"
      >
        &#10095;
      </button>
    </div>
  );
}
