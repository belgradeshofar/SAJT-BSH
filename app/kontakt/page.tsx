"use client";

import { useState } from "react";
import KontaktForma from "../components/KontaktForma";

export default function Kontakt() {
  // "sr" kao podrazumevani jezik
  const [lang, setLang] = useState<"sr" | "en">("sr");

  const translations = {
    en: {
      heroTitle: "Contact BELGRADE SHOFAR",
      heroDescription:
        "Have important information, tips, or exclusive news from Israel? Reach out and share your story – your information might become the next big headline!",
      whyContactTitle: "Why Contact Us?",
      list: [
        {
          title: "Exclusive News",
          description:
            "Our team covers events live in Israel, and your information could be key to breaking exclusive stories.",
        },
        {
          title: "Corrections & Updates",
          description:
            "If you spot errors or have additional details for our published stories, let us know so we can ensure accuracy.",
        },
        {
          title: "Collaboration & Suggestions",
          description:
            "Whether you are a source, journalist, or interested in deeper collaboration, your message is valuable to us.",
        },
        {
          title: "Advertising & Partnerships",
          description:
            "If you're interested in advertising or strategic partnerships, contact our editorial team to explore opportunities.",
        },
      ],
      sendMessageTitle: "Send Us a Message",
      workHours:
        "Editorial office hours: Sunday – Thursday: 08:00 – 20:00, Friday: 08:00 – 12:00, Saturday: closed.",
      contactDetails:
        "Email: editorial@belgradeshofar.rs | Phone: +381 11 9876543",
    },
    sr: {
      heroTitle: "Kontaktirajte BELGRADE SHOFAR",
      heroDescription:
        "Imate važne informacije, savete ili ekskluzivne vesti iz Izraela? Javite nam se i podelite svoju priču – vaša informacija može postati sledeća velika vest!",
      whyContactTitle: "Zašto nas kontaktirati?",
      list: [
        {
          title: "Ekskluzivne vesti",
          description:
            "Naš tim prati događaje u Izraelu uživo, a vaša informacija može biti ključna za nove, ekskluzivne priče.",
        },
        {
          title: "Ispravke i dopune",
          description:
            "Ukoliko uočite greške ili imate dopune za već objavljene vesti, obavestite nas kako bismo osigurali tačnost informacija.",
        },
        {
          title: "Saradnja i predlozi",
          description:
            "Bilo da ste izvor informacija, novinar ili zainteresovani za dublju saradnju, vaša poruka nam je dragocena.",
        },
        {
          title: "Oglašavanje i partnerstva",
          description:
            "Ako ste zainteresovani za oglašavanje ili strateška partnerstva, kontaktirajte našu redakciju i otkrijte mogućnosti.",
        },
      ],
      sendMessageTitle: "Pošaljite nam poruku",
      workHours:
        "Radno vreme redakcije: Nedelja – Četvrtak: 08:00 – 20:00, Petak: 08:00 – 12:00, Subota: neradno.",
      contactDetails:
        "Email: redakcija@belgradeshofar.rs | Telefon: +381 11 9876543",
    },
  };

  // Trenutne prevode koristimo preko "t" promenljive
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Jezički toggle */}
      <div className="container mx-auto px-4 py-4 text-right">
        <button
          onClick={() => setLang("sr")}
          className={`mr-2 ${lang === "sr" ? "font-bold" : "opacity-70"}`}
        >
          SR
        </button>
        <button
          onClick={() => setLang("en")}
          className={`${lang === "en" ? "font-bold" : "opacity-70"}`}
        >
          EN
        </button>
      </div>

      {/* Hero sekcija sa zaobljenim uglovima */}
      <section className="bg-[#102854] text-white py-20 rounded-lg mx-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {t.heroDescription}
          </p>
        </div>
      </section>

      {/* Glavni sadržaj: Informacije i kontakt forma */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Informaciona kolona */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">{t.whyContactTitle}</h2>
            <ul className="space-y-6 text-gray-800">
              {t.list.map((item, index) => (
                <li key={index}>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p>{item.description}</p>
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
          <p className="mt-4 text-gray-600">{t.contactDetails}</p>
        </div>
      </section>
    </div>
  );
}
