"use client";

import { useState } from "react";

export default function KontaktForma() {
  const [ime, setIme] = useState("");
  const [email, setEmail] = useState("");
  const [poruka, setPoruka] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Hvala ${ime}, vaša poruka je poslata!`);
    setIme("");
    setEmail("");
    setPoruka("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-6 p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4 text-center">Kontaktirajte nas</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Ime:</label>
        <input type="text" value={ime} onChange={(e) => setIme(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Poruka:</label>
        <textarea value={poruka} onChange={(e) => setPoruka(e.target.value)} className="w-full p-2 border border-gray-300 rounded" rows={4} required></textarea>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Pošalji</button>
    </form>
  );
}
