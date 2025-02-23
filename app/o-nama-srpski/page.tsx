"use client";

export default function ONama() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section – A professional introduction with refined styling */}
      <section className="bg-[#102854] text-white py-20 rounded-lg mx-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">O nama</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Shalom.rs je medijska platforma posvećena istinitom i
            objektivnom izveštavanju o Izraelu, jevrejskoj kulturi i borbi protiv dezinformacija.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Naša misija</h2>
            <p className="text-gray-800 text-lg mb-6">
              Naša misija je da pružimo tačne i
              proverene informacije o Izraelu i jevrejskom narodu. 
              U vremenu kada je manipulacija informacijama postala moćno oružje, Shalom.rs baca svetlo na činjenice i razotkriva propagandu.
            </p>
            <h2 className="text-3xl font-bold mb-4">Naša vizija</h2>
            <p className="text-gray-800 text-lg">
              Težimo tome da Shalom.rs postane vodeći nezavisni izvor informacija o Izraelu 
              i jevrejskom nasleđu u regionu. Koristeći modernu tehnologiju, dubinske analize i
              istraživačko novinarstvo, gradimo platformu koja razbija predrasude, razotkriva lažne 
              narative i pruža glas onima koji su često nečujni u mejnstrim medijima. 
            </p>
          </div>
          <div>
            <img
              src="o-nama-misija.jpg"
              alt="Naša misija i vizija"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Naše vrednosti</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center px-4">
              <h3 className="text-2xl font-semibold mb-2">Istina</h3>
              <p className="text-gray-700">
                Svaka objavljena vest temelji se na činjenicama, 
                proverenim izvorima i dubinskim analizama.
              </p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-2xl font-semibold mb-2">Nepristrasnost</h3>
              <p className="text-gray-700">
                Informišemo bez senzacionalizma čime
                omogućavamo čitaocima da dobiju potpunu sliku događaja.
              </p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-2xl font-semibold mb-2">Obrazovanje</h3>
              <p className="text-gray-700">
                Kroz istorijske osvrte, analize i edukativni sadržaj, širimo znanje 
                o Izraelu i jevrejskom nasleđu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration with Metapolis Center */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">
            U saradnji sa Metapolis Centrom
          </h2>
          <p className="text-gray-800 text-lg">
            Shalom.rs je deo šire inicijative digitalnog razvoja, podržane od strane 
            Metapolis Centra – organizacije posvećene promociji novinarstva, 
            istraživačkih projekata i društvenih inicijativa.  
            Ova saradnja nam omogućava tehnološku i analitičku podršku u borbi za istinu
            i transparentnost u medijima. 
       
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#102854] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pridružite se našoj misiji</h2>
          <p className="text-lg mb-6">
            Ako podržavate novinarstvo i borbu protiv dezinformacija, budite deo zajednice koja oblikuje budućnost medija.
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
