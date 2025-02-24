import { supabase } from "../../api/auth";

export async function generateMetadata({ params }: { params: { id: string } }) {
  // Sačekaj da se članak učita
  const { data: article, error } = await supabase
    .from("articles")
    .select("title, content, image_url")
    .eq("id", params.id)
    .single();

  if (error || !article) {
    return {
      title: "Članak nije pronađen | Shalom.rs",
      description: "Greška pri učitavanju članka.",
    };
  }

  return {
    title: `${article.title} | Shalom.rs`,
    description: article.content.substring(0, 150),
    openGraph: {
      title: article.title,
      description: article.content.substring(0, 150),
      url: `https://www.shalom.rs/articles/${params.id}`,
      siteName: "Shalom.rs",
      images: [
        {
          url: article.image_url || "https://www.shalom.rs/default-image.jpg",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.content.substring(0, 150),
      images: [
        article.image_url || "https://www.shalom.rs/default-image.jpg",
      ],
    },
  };
}
