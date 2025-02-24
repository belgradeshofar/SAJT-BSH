"use client";

import { useState } from "react";

// Supabase podaci
const SUPABASE_URL = "https://dlpqnnfkhuiulmebmuvp.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRscHFubmZraHVpdWxtZWJtdXZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxNzY2ODcsImV4cCI6MjA1NDc1MjY4N30.qsF_pO9HM55rnTu8khWe3AV_a09AgI-0J_YnXp1gVsk";

export default function KontaktForma() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/contact_messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Prefer": "return=minimal",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset forme
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Ime</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold">Poruka</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isSending ? "Šaljem..." : "Pošalji poruku"}
      </button>

      {status === "success" && <p className="text-green-600 mt-3">Poruka uspešno poslata!</p>}
      {status === "error" && <p className="text-red-600 mt-3">Došlo je do greške. Pokušajte ponovo.</p>}
    </form>
  );
}
