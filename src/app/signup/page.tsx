"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate submit (replace with your backend/API later)
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    router.push("/thank-you");
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-zinc-100">
      <header className="border-b border-white/5 bg-[#0d0d0d]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-white"
          >
            Bishu Graphis Design
          </Link>
          <Link
            href="/"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            ← Back
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-lg px-6 py-20">
        <div className="mb-10 overflow-hidden rounded-2xl bg-zinc-800">
          <div className="relative aspect-[3/2]">
            <Image
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80"
              alt="Ebook cover"
              fill
              className="object-cover"
              sizes="(max-width: 512px) 100vw, 512px"
            />
          </div>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Get your free ebook
        </h1>
        <p className="mt-3 text-zinc-400">
          Enter your email and we&apos;ll send you the download link right away.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-800/50 px-4 py-3.5 text-white placeholder-zinc-500 outline-none transition focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
              Name <span className="text-zinc-500">(optional)</span>
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-800/50 px-4 py-3.5 text-white placeholder-zinc-500 outline-none transition focus:border-amber-400/50 focus:ring-2 focus:ring-amber-400/20"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-amber-400 py-4 text-base font-semibold text-[#0d0d0d] transition hover:bg-amber-300 disabled:opacity-70"
          >
            {loading ? "Sending…" : "Send me the ebook"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          No spam. Unsubscribe anytime.
        </p>
      </section>
    </div>
  );
}
