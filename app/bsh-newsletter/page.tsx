import React from "react";
import Link from "next/link";

const NewsletterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-600 text-white px-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900">
          Newsletter
        </h1>
        <p className="text-center text-gray-600 text-lg mt-4">
          Ova stranica je trenutno u pripremi. Uskoro ćete moći da se prijavite na naš newsletter i primate najnovije vesti.
        </p>
        <p className="text-center text-gray-500 mt-2">
          This page is currently under preparation. Soon, you will be able to subscribe to our newsletter and receive the latest updates.
        </p>

        <div className="mt-10 text-center">
          <Link href="https://shalom.rs">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Povratak na početnu | Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;
