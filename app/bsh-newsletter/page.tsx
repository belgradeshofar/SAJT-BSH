"use client";

import { useState } from "react";
import { supabase } from "../api/auth";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaUsers, FaGift, FaRocket } from "react-icons/fa";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);
  const router = useRouter();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("subscribers").insert([{ email }]);

    if (error) {
      setMessage("Greška! Pokušajte ponovo.");
      console.error(error.message);
    } else {
      setMessage("Uspešno ste se prijavili na BSH Newsletter!");
      setEmail("");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
    setLoading(false);
  };

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // Na manjim ekranima: p-4, na srednjim: p-6, na većim: p-10
      className="flex items-center justify-center min-h-screen p-4 sm:p-6 md:p-10"
    >
      {/* Spoljašnji kontejner sa tamnoplavom pozadinom */}
      <div
        className="
          w-full
          max-w-full md:max-w-6xl
          bg-[#102854]
          text-white
          shadow-2xl
          rounded-3xl
          p-4 sm:p-6 md:p-10
          flex
          justify-center
          items-center
        "
      >
        {/* Unutrašnji kontejner (beli), ograničena širina na većim ekranima */}
        <div
          className="
            w-full
            max-w-full md:max-w-3xl
            bg-white
            text-gray-900
            shadow-xl
            rounded-3xl
            p-4 sm:p-6 md:p-8
            text-center
          "
        >
          {/* Naslov */}
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold"
          >
            BSH NEWSLETTER
          </motion.h1>
          <p className="text-gray-600 text-base sm:text-lg mt-2">
            Prijavi se i osiguraj pristup{" "}
            <span className="font-bold">tajnim informacijama</span> pre svih!
          </p>

          {/* Ekskluzivnost (žuti blok) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-4 sm:mt-6 bg-yellow-300 text-gray-900 p-3 sm:p-4 rounded-xl shadow-lg"
          >
            <p className="text-base sm:text-lg font-semibold">
              PRVI SAZNAJ KLJUČNE VESTI
            </p>
            <p className="text-sm">
              Samo pretplatnici dobijaju{" "}
              <span className="font-bold">insajderske informacije</span>, 
              analize i ekskluzivne materijale koji nisu javno dostupni.
            </p>
          </motion.div>

          {/* Forma */}
          <motion.form
            onSubmit={handleSubscribe}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 sm:mt-6 flex flex-col items-center"
          >
            <div className="relative w-full">
              <FaEnvelope className="absolute left-3 top-3 text-[#102854]" />
              <input
                type="email"
                placeholder="Unesite vašu e-mail adresu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="
                  w-full
                  pl-10
                  p-3
                  border
                  border-gray-300
                  rounded-lg
                  focus:ring-2
                  focus:ring-yellow-400
                  outline-none
                  text-sm sm:text-base
                "
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                mt-4
                bg-blue-600
                text-white
                font-bold
                py-2 sm:py-3
                rounded-lg
                hover:bg-blue-700
                transition-all
                flex
                items-center
                justify-center
                text-sm sm:text-base
              "
            >
              {loading ? "Prijava..." : "PRIJAVI ME"}
            </button>
          </motion.form>

          {/* Benefiti u karticama */}
          <div className="mt-6 text-left">
            <h3 className="text-base sm:text-lg font-bold">
              Šta dobijaš?
            </h3>
            {[
              { title: "Prvi saznaj ključne informacije", icon: FaRocket },
              { title: "Ekskluzivne analize", icon: FaUsers },
              { title: "Specijalni sadržaj samo za pretplatnike", icon: FaGift },
              { title: "Tvoj e-mail je siguran", icon: FaLock },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="
                  bg-gray-100
                  p-3
                  rounded-lg
                  mt-3
                  cursor-pointer
                  shadow-lg
                "
                onClick={() => toggleExpand(index)}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center">
                  <item.icon className="text-blue-600 text-xl mr-3" />
                  <p className="text-gray-800 font-semibold text-sm sm:text-base">
                    {item.title}
                  </p>
                </div>
                {expanded === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-700 text-sm mt-2"
                  >
                    Ovaj benefit ti donosi ekskluzivne informacije i pristup
                    ključnim podacima pre nego što postanu dostupni široj javnosti.
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-6"
          >
            <p className="text-gray-800 font-semibold text-sm sm:text-base">
              Pridružilo nam se već{" "}
              <span className="text-blue-600 font-bold">12.537</span> pretplatnika!
            </p>
          </motion.div>

          {/* Poruka o uspehu ili grešci */}
          {message && (
            <p className="mt-4 text-sm sm:text-base font-semibold bg-green-200 p-3 rounded-lg">
              {message}
            </p>
          )}

          {/* Garancija privatnosti */}
          <p className="text-gray-500 text-xs sm:text-sm mt-4">
            Nikada nećemo deliti vaš e-mail. Možete se odjaviti u bilo kom trenutku.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
