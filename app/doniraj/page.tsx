"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function DonatePage() {
  // State for the donation amount (if you want a "custom" input)
  const [amount, setAmount] = useState<string>("");

  // Optionally: sending data to a server, Supabase, PayPal, etc.
  const handleDonate = () => {
    alert(`Thank you for your donation of ${amount || "the selected amount"}!`);
    // Here you would integrate the real logic (Stripe, PayPal, bank transfer link, etc.)
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero section with call to action */}
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-blue-50 rounded-xl p-6 mb-8 shadow-lg"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-4">
          Support Belgrade Shofar
        </h1>
        <p className="max-w-2xl mx-auto text-center text-gray-700 text-sm sm:text-base">
          Your donation helps us continue to preserve memories, provide education, 
          and spread the truth about significant historical events. Together we build 
          a stronger community and preserve heritage for future generations.
        </p>
      </motion.section>

      {/* Main donation block */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left side: reasons to donate / benefits */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Why donate?
          </h2>
          <ul className="space-y-4 text-sm sm:text-base text-gray-700">
            <li>
              <span className="font-semibold text-blue-700">Preserving history:</span> 
              &nbsp;You help preserve memories and documents from being forgotten.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Educating the youth:</span> 
              &nbsp;Your donation funds seminars and workshops for younger generations.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Content accessibility:</span> 
              &nbsp;You ensure that research and archival materials remain free and accessible to everyone.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Strengthening the community:</span> 
              &nbsp;You participate in organizing cultural events, lectures, and panel discussions.
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

        {/* Right side: amount selection form + Donate button */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Ways to donate
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              Choose an amount or enter your desired donation amount. 
              Your support makes a big difference.
            </p>
            {/* Preset amounts */}
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
            {/* Custom amount input */}
            <div className="flex items-center mb-6">
              <input
                type="number"
                min={1}
                placeholder="Enter the amount (RSD)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-l focus:ring-2 focus:ring-blue-200 outline-none"
              />
              <span className="inline-block bg-gray-300 text-gray-700 px-3 py-2 rounded-r">
                RSD
              </span>
            </div>

            {/* Info: e.g. bank account, PayPal link, etc. */}
            <div className="text-sm text-gray-600 space-y-2 mb-4">
              <p>
                <span className="font-semibold">Bank account:</span> 
                &nbsp; 123-456789-12, Name of the Bank
              </p>
              <p>
                <span className="font-semibold">PayPal:</span> 
                &nbsp; <a href="https://www.paypal.me/BelgradeShofar" className="text-blue-500 underline">
                  paypal.me/BelgradeShofar
                </a>
              </p>
              <p>
                <span className="font-semibold">Contact:</span> 
                &nbsp; For other ways to donate, write us at 
                &nbsp; <a href="mailto:info@belgradeshofar.org" className="text-blue-500 underline">
                  info@belgradeshofar.org
                </a>
              </p>
            </div>
          </div>

          {/* Donate button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDonate}
            className="bg-yellow-300 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition-all w-full"
          >
            Donate
          </motion.button>
        </div>
      </motion.section>

      {/* Social proof / Transparency / Thank you section */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-8 bg-blue-50 rounded-xl p-6 shadow-lg"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">
          Where does your donation go?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700 text-sm sm:text-base">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2 text-blue-700">Research & Archiving</h3>
            <p>Funds the collection of documents, interviews, and historical records.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2 text-blue-700">Education & Seminars</h3>
            <p>We organize workshops and lectures for students and the broader public.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2 text-blue-700">Culture & Remembrance</h3>
            <p>You support exhibitions, cultural events, and remembrance projects.</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          <span className="font-semibold">Transparency:</span> 
          &nbsp;All donors receive an annual report on financial operations 
          and completed projects.
        </p>
      </motion.section>
    </main>
  );
}
