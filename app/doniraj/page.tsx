"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function DonatePage() {
  // Stanje za iznos donacije (ako želite "custom" unos)
  const [amount, setAmount] = useState<string>("");

  // Eventualno: slanje podataka na server, Supabase, PayPal, itd.
  const handleDonate = () => {
    alert(`Hvala na donaciji od ${amount || "izabranog iznosa"}!`);
    // Ovde biste integrisali pravu logiku (Stripe, PayPal, bank transfer link, itd.)
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero sekcija sa pozivom na akciju */}
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-blue-50 rounded-xl p-6 mb-8 shadow-lg"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-4">
          Podrži Belgrade Shofar
        </h1>
        <p className="max-w-2xl mx-auto text-center text-gray-700 text-sm sm:text-base">
          Vaša donacija pomaže nam da nastavimo sa očuvanjem sećanja, 
          edukacijom i širenjem istine o važnim istorijskim događajima. 
          Zajedno gradimo snažniju zajednicu i čuvamo nasleđe za buduće generacije.
        </p>
      </motion.section>

      {/* Glavni blok za doniranje */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Leva strana: Razlozi za donaciju / benefiti */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Zašto donirati?
          </h2>
          <ul className="space-y-4 text-sm sm:text-base text-gray-700">
            <li>
              <span className="font-semibold text-blue-700">Očuvanje istorije:</span> 
              &nbsp;Pomažete da se sačuvaju sećanja i dokumenti od zaborava.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Edukacija mladih:</span> 
              &nbsp;Vaša donacija finansira seminare i radionice za mlade generacije.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Dostupnost sadržaja:</span> 
              &nbsp;Obezbeđujete da istraživački i arhivski materijali budu besplatni i dostupni svima.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Jačanje zajednice:</span> 
              &nbsp;Učestvujete u organizaciji kulturnih događaja, predavanja i tribina.
            </li>
          </ul>
          <div className="mt-6">
            <img
              src="/donation_illustration.png"
              alt="Donation illustration"
              className="w-full h-auto object-cover rounded-lg shadow"
            />
          </div>
        </div>

        {/* Desna strana: Forma za iznos i dugme Doniraj */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Načini doniranja
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              Odaberite iznos ili unesite željeni iznos donacije. 
              Vaša podrška čini veliku razliku.
            </p>
            {/* Preddefinisani iznosi */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[500, 1000, 2000, 5000].map((val) => (
                <button
                  key={val}
                  onClick={() => setAmount(val.toString())}
                  className={`
                    py-2 rounded border 
                    ${
                      amount === val.toString()
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }
                  `}
                >
                  {val} RSD
                </button>
              ))}
            </div>
            {/* Custom unos iznosa */}
            <div className="flex items-center mb-6">
              <input
                type="number"
                min={1}
                placeholder="Unesite iznos (RSD)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-l focus:ring-2 focus:ring-blue-200 outline-none"
              />
              <span className="inline-block bg-gray-300 text-gray-700 px-3 py-2 rounded-r">
                RSD
              </span>
            </div>

            {/* Info: npr. uplata na račun, PayPal link, itd. */}
            <div className="text-sm text-gray-600 space-y-2 mb-4">
              <p>
                <span className="font-semibold">Bankovni račun:</span> 
                &nbsp; 123-456789-12, Naziv Banke
              </p>
              <p>
                <span className="font-semibold">PayPal:</span> 
                &nbsp; <a href="https://www.paypal.me/BelgradeShofar" className="text-blue-500 underline">
                  paypal.me/BelgradeShofar
                </a>
              </p>
              <p>
                <span className="font-semibold">Kontakt:</span> 
                &nbsp; Za druge načine doniranja pišite nam na 
                &nbsp; <a href="mailto:info@belgradeshofar.org" className="text-blue-500 underline">
                  info@belgradeshofar.org
                </a>
              </p>
            </div>
          </div>

          {/* Dugme Doniraj */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDonate}
            className="bg-yellow-300 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition-all w-full"
          >
            Doniraj
          </motion.button>
        </div>
      </motion.section>

      {/* Socijalni dokaz / Transparentnost / Zahvalnica */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-8 bg-blue-50 rounded-xl p-6 shadow-lg"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
          Gde ide vaša donacija?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700 text-sm sm:text-base">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2 text-blue-700">Istraživanje & Arhiviranje</h3>
            <p>Finansira prikupljanje dokumenata, intervjua i istorijskih zapisa.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2 text-blue-700">Edukacija & Seminari</h3>
            <p>Organizujemo radionice i predavanja za studente i širu javnost.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2 text-blue-700">Kultura & Sećanje</h3>
            <p>Podržavate izložbe, kulturne događaje i projekte sećanja.</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          <span className="font-semibold">Transparentnost:</span> 
          &nbsp;Svi donatori dobijaju godišnji izveštaj o finansijskom poslovanju i 
          ostvarenim projektima.
        </p>
      </motion.section>
    </main>
  );
}
