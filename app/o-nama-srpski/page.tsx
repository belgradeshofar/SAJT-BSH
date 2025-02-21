"use client";

export default function ONama() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero sekcija – atraktivan uvod sa zaobljenim uglovima */}
      <section className="bg-[#102854] text-white py-20 rounded-lg mx-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">O nama</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            **Shalom.rs** je vodeći news portal koji prikuplja i prenosi
            najnovije i najpouzdanije vesti iz Izraela.
          </p>
        </div>
      </section>

      {/* Misija i Vizija */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Naša Misija</h2>
            <p className="text-gray-800 text-lg mb-6">
              Naša misija je da obezbedimo tačne, pravovremene i nepristrasne informacije,
              inspirišući i osnažujući našu publiku da bude u toku sa svim ključnim
              dešavanjima iz Izraela.
            </p>
            <h2 className="text-3xl font-bold mb-4">Naša Vizija</h2>
            <p className="text-gray-800 text-lg">
              Težimo da postanemo primarni izvor vesti u regionu, koristeći inovativne 
              tehnologije i savremene novinarske prakse kako bismo osigurali visoki kvalitet 
              i kredibilitet informacija.
            </p>
          </div>
          <div>
            <img
              src="/images/o-nama-misija.jpg"
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
                Poštujemo novinarsku etiku, istinitost i nepristrasnost u svakom izveštaju.
              </p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-2xl font-semibold mb-2">Preciznost</h3>
              <p className="text-gray-700">
                Naša posvećenost detaljima obezbeđuje da svaka vest bude proverena i tačna.
              </p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-2xl font-semibold mb-2">Inovativnost</h3>
              <p className="text-gray-700">
                Koristimo napredne tehnologije kako bismo brzo i efikasno prenosili informacije.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tim */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Naš Tim</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Primer člana tima – dodajte po potrebi */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src="/images/team/member1.jpg"
              alt="Član tima"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold">Marko Marković</h3>
            <p className="text-gray-600">Glavni Novinar</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src="/images/team/member2.jpg"
              alt="Član tima"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold">Jelena Jovanović</h3>
            <p className="text-gray-600">Urednik</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src="/images/team/member3.jpg"
              alt="Član tima"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold">Nikola Nikolić</h3>
            <p className="text-gray-600">Digitalni Strateg</p>
          </div>
        </div>
      </section>

      {/* Poziv na akciju */}
      <section className="bg-[#102854] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pridružite se našoj misiji</h2>
          <p className="text-lg mb-6">
            Ako verujete u važnost istinitog i nepristrasnog novinarstva, budite deo zajednice
            koja oblikuje budućnost informisanja.
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
