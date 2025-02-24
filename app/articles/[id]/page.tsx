import ClientArticlePage from "./ClientArticlePage";
import { createClient } from '@supabase/supabase-js';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = params.id;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    return {
      title: 'Članak',
      openGraph: {
        title: 'Članak',
        images: ['https://example.com/default.jpg'],
        url: `https://example.com/articles/${id}`,
      },
    };
  }

  return {
    title: data.title,
    openGraph: {
      title: data.title,
      images: [data.image_url ? data.image_url : 'https://example.com/default.jpg'],
      url: `https://example.com/articles/${id}`,
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  return <ClientArticlePage id={params.id} />;
}
