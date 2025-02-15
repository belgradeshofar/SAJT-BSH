import { supabase } from "../api/auth"; 
import SliderClient from "./SliderClient";

export default async function Slider() {
  // 1) Dohvat sa servera (SSR ili SSG, u zavisnosti od revalidate podešavanja)
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("featured", true)
    .order("created_at", { ascending: false })
    .limit(6);

  if (error) {
    console.error("Greška prilikom učitavanja istaknutih članaka:", error.message);
    return <div> Greška prilikom učitavanja slajdera. </div>;
  }

  const articles = data || [];

  // 2) Prosledite članke klijentskoj komponenti
  return <SliderClient articles={articles} />;
}
