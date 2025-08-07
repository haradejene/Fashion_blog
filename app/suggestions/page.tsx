"use client";
import Link from 'next/link';
import { useState } from "react";
import Footer from "../components/Footer";

export default function SuggestionsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }


    console.log("Suggestion submitted:", {
      name,
      email,
      message,
    });

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <head><title>Suggestions</title></head>
    <nav className="flex justify-between color white 700 items-center px-6 py-4 " >
  <h1 className="text-4xl font-light">FASHIONOVA</h1>

  <div className="flex gap-6">
    <Link href={"/"}> Blog </Link>
    <Link href={"/article"}>Article</Link>
     <Link href="/suggestions">Suggestions</Link>
  </div>
</nav>
    <main className="max-w-xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Suggestion Box</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            className="border border-gray-300 rounded p-3"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            className="border border-gray-300 rounded p-3"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            className="border border-gray-300 rounded p-4 min-h-[150px] resize-none"
            placeholder="Write your suggestion or comment here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      ) : (
        <p className="text-green-600 font-medium text-center">
         Thank you, your feedback has been submitted!
        </p>
      )}
    </main>
     <Footer />
    </>
  );
}
