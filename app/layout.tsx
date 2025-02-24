import "./globals.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SliderHeader from "./components/SliderHeader";
import Footer from "./components/Footer";

export const metadata = {
  icons: {
    icon: "/favicon.png",
  },
  description: "Aktuelne informacije i novosti iz Izraela",
  keywords:
    "vesti, Izrael, Bliski istok, Izraelci, Jevreji, Palestina, Tel Aviv, Jerusalim, Izrael i Palestina, Izraelski konflikt, Izraelska vojska, Mosad",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <head>
        <meta name="theme-color" content="#f8f4f4" />
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />
        <style>
          {`
            .ticker-container {
              width: 100%;
              overflow: hidden;
              white-space: nowrap;
              position: relative;
              background: transparent;
              padding: 10px 0;
            }

            .ticker-track {
              display: flex;
              width: max-content;
              animation: ticker-scroll 90s linear infinite; /* Blago ubrzano */
            }

            .ticker-text {
              font-size: 16px;
              font-weight: 600;
              color: #001a33;
              padding-right: 50px;
            }

            @keyframes ticker-scroll {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
          `}
        </style>
      </head>

      <body>
        <Header />
        <NavBar />

        {/* Trčeći tekst sa poboljšanim profesionalnim izražavanjem */}
        <div className="ticker-container">
          <div className="ticker-track">
            <span className="ticker-text">
              Dobrodošli na Shalom.rs, novi informativni portal posvećen izveštavanju o događajima u Izraelu i na Bliskom istoku.  
              Naš cilj je pružiti tačne i aktuelne informacije u vremenu sveprisutnih dezinformacija.  
              Portal je u razvoju, a određeni odeljci su još u pripremi. Aktivno radimo na unapređenju sadržaja i tehničke infrastrukture  
              kako bismo osigurali stabilno i kvalitetno funkcionisanje. Hvala vam na podršci i poverenju.  
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              Welcome to Shalom.rs, a newly established news portal dedicated to reporting on events in Israel and the Middle East.
              Our goal is to provide accurate and timely information in an era of widespread misinformation.
              The portal is under development, with certain sections still in preparation. We are actively working on improving content  
              and technical infrastructure to ensure stable and high-quality operation. Thank you for your support and trust.
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              Dobrodošli na Shalom.rs, novi informativni portal posvećen izveštavanju o događajima u Izraelu i na Bliskom istoku.  
              Naš cilj je pružiti tačne i aktuelne informacije u vremenu sveprisutnih dezinformacija.  
              Portal je u razvoju, a određeni odeljci su još u pripremi. Aktivno radimo na unapređenju sadržaja i tehničke infrastrukture  
              kako bismo osigurali stabilno i kvalitetno funkcionisanje. Hvala vam na podršci i poverenju.  
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              Welcome to Shalom.rs, a newly established news portal dedicated to reporting on events in Israel and the Middle East.
              Our goal is to provide accurate and timely information in an era of widespread misinformation.
              The portal is under development, with certain sections still in preparation. We are actively working on improving content  
              and technical infrastructure to ensure stable and high-quality operation. Thank you for your support and trust.
            </span>
          </div>
        </div>

        <main className="container mx-auto p-4">{children}</main>
        <SliderHeader />
        <Footer />
      </body>
    </html>
  );
}
