"use client";

export default function ONama() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero sekcija – profesionalan uvod sa rafiniranim stilom */}
      <section className="bg-[#102854] text-white py-20 rounded-lg mx-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">O nama</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Shalom.rs je vodeći news portal posvećen prenošenju pouzdanih i pravovremenih vesti iz Izraela.
          </p>
        </div>
      </section>

      {/* Misija i Vizija */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Naša Misija</h2>
            <p className="text-gray-800 text-lg mb-6">
              Naša misija je da pružimo tačne, pravovremene i nepristrasne informacije, osnažujući našu publiku sveobuhvatnim uvidom u najznačajnija dešavanja u Izraelu.
            </p>
            <h2 className="text-3xl font-bold mb-4">Naša Vizija</h2>
            <p className="text-gray-800 text-lg">
              Težimo da shalom.rs postane vodeći izvor pouzdanih vesti u regionu koristeći napredne tehnologije i savremene novinarske prakse.
            </p>
          </div>
          <div>
            <img
              src="o-nama-misija.jpg"
              alt="Naša Misija i Vizija"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Naše Vrednosti */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Naše Vrednosti</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center px-4">
              <h3 className="text-2xl font-semibold mb-2">Integritet</h3>
              <p className="text-gray-700">
                Poštujemo najviše standarde novinarske etike, osiguravajući istinitost i nepristrasnost u svakom izveštaju.
              </p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-2xl font-semibold mb-2">Preciznost</h3>
              <p className="text-gray-700">
                Naša posvećenost detaljima garantuje da je svaka vest pažljivo proverena i tačna.
              </p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-2xl font-semibold mb-2">Inovativnost</h3>
              <p className="text-gray-700">
                Koristimo najsavremenije tehnologije kako bismo brzo i efikasno prenosili informacije.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Saradnja sa Metapolis Centrom */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">U saradnji sa Metapolis Centrom</h2>
          <p className="text-gray-800 text-lg">
            Shalom.rs je ponosan što je deo šire inicijative razvoja web platformi koju sprovodi Metapolis Centar – organizacija posvećena promociji nezavisnog, neprofitnog novinarstva i inovativnog razvoja zajednica. Vođena od strane grupe mladih profesionalaca, tehnička podrška Metapolisa pomaže nam u promociji nepristrasnih vesti i osnaživanju građana transparentnim informacijama.
          </p>
        </div>
      </section>

      {/* Poziv na akciju */}
      <section className="bg-[#102854] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pridružite se našoj misiji</h2>
          <p className="text-lg mb-6">
            Ako verujete u važnost istinitog i nepristrasnog novinarstva, budite deo zajednice koja oblikuje budućnost informisanja.
          </p>
          <a
            href="/kontakt"
            className="bg-yellow-300 text-black py-3 px-6 rounded hover:bg-yellow-400 font-bold"
          >
            Kontaktirajte nas
          </a>
        </div>
      </section>
    </div>
  );
}
