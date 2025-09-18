// frontend/app/contact/page.tsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="max-w-2xl mx-auto px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-8 space-y-6"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-sm">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm">Something went wrong. Try again.</p>
        )}
      </form>
    </section>
  );
}
