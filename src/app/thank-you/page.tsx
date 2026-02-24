import Image from "next/image";
import Link from "next/link";

export default function ThankYouPage() {
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
            Home
          </Link>
        </div>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-2xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="relative mb-10 h-24 w-24 overflow-hidden rounded-full bg-amber-400/20">
          <svg
            className="absolute inset-0 m-auto h-12 w-12 text-amber-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Thank you for your purchase
        </h1>
        <p className="mt-5 max-w-md text-lg text-zinc-400">
          Your ebook is on its way. Check your inbox for the download link. If
          you don&apos;t see it, check your spam folder.
        </p>

        <div className="mt-14 w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-zinc-800/50">
          <div className="relative aspect-video bg-zinc-800">
            <Image
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80"
              alt="Enjoy reading"
              fill
              className="object-cover"
              sizes="384px"
            />
          </div>
          <div className="p-5">
            <p className="text-sm font-medium text-amber-400">What&apos;s next?</p>
            <p className="mt-1 text-zinc-300">
              Open the PDF and start with Chapter 1. You&apos;ll get the most out of
              it by trying the exercises as you go.
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="mt-12 inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-medium text-white transition hover:border-white/40 hover:bg-white/5"
        >
          Back to home
        </Link>
      </section>
    </div>
  );
}
