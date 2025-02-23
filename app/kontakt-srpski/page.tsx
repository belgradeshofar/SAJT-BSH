"use client";

import { useState } from "react";
import KontaktForma from "../components/KontaktForma";

export default function Kontakt() {
  // Jezik sada može biti samo "sr"
  const [jezik, setJezik] = useState<"sr">("sr");

  const prevodi = {
    sr: {
      heroTitle: "Kontaktirajte Shalom.rs",
      heroDescription:
        "Imate važne informacije, savete ili ekskluzivne vesti iz Izraela? Kontaktirajte nas i podelite svoju priču – vaša informacija može postati sledeća velika vest!",
      whyContactTitle: "Zašto nas kontaktirati?",
      list: [
        {
          title: "Ekskluzivne vesti",
          description:
            "Naš tim uživo prati događaje u Izraelu, a vaša informacija može biti ključna za nove ekskluzivne priče.",
        },
        {
          title: "Ispravke i dopune",
          description:
            "Ako primetite greške ili imate dodatne informacije za već objavljene vesti, javite nam se kako bismo osigurali tačnost.",
        },
        {
          title: "Saradnja i predlozi",
          description:
            "Bilo da ste izvor, novinar ili zainteresovani za dublju saradnju, vaša poruka nam je dragocena.",
        },
        {
          title: "Oglašavanje i partnerstva",
          description:
            "Ako ste zainteresovani za oglašavanje ili strateška partnerstva, kontaktirajte našu redakciju i istražite mogućnosti.",
        },
      ],
      sendMessageTitle: "Pošaljite nam poruku",
      workHours:
        "Radno vreme redakcije: Nedelja – Četvrtak: 08:00 – 20:00, Petak: 08:00 – 12:00, Subota: neradan dan.",
    },
  };

  // Provera da li postoji prevod, ako ne koristi "sr"
  const t = prevodi[jezik] || prevodi["sr"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero sekcija */}
      <section className="bg-[#102854] text-white py-20 rounded-lg mx-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.heroTitle}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {t.heroDescription}
          </p>
        </div>
      </section>

      {/* Glavni sadržaj */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Informacije */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">{t.whyContactTitle}</h2>
            <ul className="space-y-6 text-gray-800">
              {t.list &&
                t.list.map((stavka, indeks) => (
                  <li key={indeks}>
                    <h3 className="text-xl font-semibold">{stavka.title}</h3>
                    <p>{stavka.description}</p>
                  </li>
                ))}
            </ul>
          </div>

          {/* Kontakt forma */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">{t.sendMessageTitle}</h2>
            <KontaktForma />
          </div>
        </div>
      </section>

      {/* Dodatni kontakt detalji */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-700">{t.workHours}</p>
        </div>
      </section>
    </div>
  );
}
