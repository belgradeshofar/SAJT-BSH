import "./globals.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SliderHeader from "./components/SliderHeader";
import Footer from "./components/Footer";

export const metadata = {
  icons: {
    icon: "/favicon.png", // Obavezno pocinje kosom crtom
  },
  description: "Aktuelne informacije i novosti iz Izraela",
  // Možeš dodati još meta tagova, npr. keywords, viewport, itd.
  keywords: "vesti, Izrael, Blisko istok, Izraelci, Jevreji, Palestina, Tel Aviv, Jerusalim, Izrael i Palestina, Izraelski konflikt, Izraelska vojska, Mosad",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      {/* ⬇️ Ovde ubacujemo meta tagove za sprečavanje dark moda i definisanje boje */}
      <head>
        <meta name="theme-color" content="#f8f4f4" />
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />

      </head>

      <body>
        <Header />
        <NavBar />
        <main className="container mx-auto p-4">{children}</main>
        <SliderHeader />
        <Footer />
      </body>
    </html>
  );
}


