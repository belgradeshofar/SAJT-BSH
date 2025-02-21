"use client";

import { useState } from "react";
import KontaktForma from "../components/KontaktForma";

export default function Kontakt() {
  // "sr" as the default language
  const [lang, setLang] = useState<"sr" | "en">("sr");

  const translations = {
    en: {
      heroTitle: "Contact Shalom.rs",
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
      // All text that was originally in Serbian is now translated to English,
      // but we keep this 'sr' key and structure unchanged, per request.
      heroTitle: "Contact Shalom.rs",
      heroDescription:
        "Do you have important information, tips, or exclusive news from Israel? Contact us and share your story – your information may become the next big headline!",
      whyContactTitle: "Why contact us?",
      list: [
        {
          title: "Exclusive news",
          description:
            "Our team follows events in Israel live, and your information can be crucial for new, exclusive stories.",
        },
        {
          title: "Corrections and additions",
          description:
            "If you notice errors or have additions for already published news, let us know so we can ensure accuracy.",
        },
        {
          title: "Collaboration and suggestions",
          description:
            "Whether you are a source, a journalist, or interested in deeper collaboration, your message is valuable to us.",
        },
        {
          title: "Advertising and partnerships",
          description:
            "If you are interested in advertising or strategic partnerships, contact our editorial staff and discover the possibilities.",
        },
      ],
      sendMessageTitle: "Send us a message",
      workHours:
        "Editorial office working hours: Sunday – Thursday: 08:00 – 20:00, Friday: 08:00 – 12:00, Saturday: non-working.",
     
       
    },
  };

  // We use the current translations via the "t" variable
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Language toggle */}
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

      {/* Hero section with rounded corners */}
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

      {/* Main content: info + contact form */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Info column */}
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

          {/* Contact form */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">{t.sendMessageTitle}</h2>
            <KontaktForma />
          </div>
        </div>
      </section>

      {/* Additional contact details */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-700">{t.workHours}</p>

        </div>
      </section>
    </div>
  );
}
