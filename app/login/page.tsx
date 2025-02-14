"use client";

import { useState } from "react";
import { supabase } from "../api/auth"; // Ispravna putanja za auth klijent
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState(""); // Držimo email unosa
  const [password, setPassword] = useState(""); // Držimo lozinku unosa
  const [error, setError] = useState(""); // Greška ako prijava ne uspe
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message); // Prikaži grešku ako postoji
    } else {
      router.push("/admin"); // Preusmerenje na Admin Panel nakon uspešne prijave
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Prijava</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block font-bold">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-bold">Lozinka:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Prijavi se
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
}
