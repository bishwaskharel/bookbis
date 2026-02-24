import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-zinc-100">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0d0d0d]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight text-white">
            Bishu Graphis Design
          </span>
          <Link
            href="/signup"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#0d0d0d] transition hover:bg-zinc-200"
          >
            Get the Ebook
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-amber-400/90">
                Free Ebook
              </p>
              <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-white md:text-5xl lg:text-6xl">
                Level up your design workflow with proven techniques from the studio.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400">
                Typography, layout, color, and client communication—packed into one
                concise guide. No fluff, just what works.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-base font-semibold text-[#0d0d0d] transition hover:bg-amber-300"
                >
                  Get the Ebook
                  <span className="text-[#0d0d0d]">→</span>
                </Link>
                <a
                  href="#preview"
                  className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  See preview
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-800 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
                alt="Design workspace and typography"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section id="preview" className="border-t border-white/5 bg-zinc-900/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
            What&apos;s inside
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
            Practical chapters you can apply immediately.
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Typography systems",
                desc: "Scale, hierarchy, and pairing that reads.",
                img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
              },
              {
                title: "Layout & grid",
                desc: "Structure that holds any project together.",
                img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80",
              },
              {
                title: "Color & mood",
                desc: "Palettes that communicate before you add copy.",
                img: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-xl border border-white/10 bg-zinc-800/50 transition hover:border-amber-400/30"
              >
                <div className="relative aspect-[4/3] bg-zinc-800">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="relative mx-auto aspect-video max-w-2xl overflow-hidden rounded-2xl bg-zinc-800">
            <Image
              src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=900&q=80"
              alt="Creative design process"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
              <p className="text-xl font-semibold text-white">
                Join thousands of designers who already use these methods.
              </p>
            </div>
          </div>
          <Link
            href="/signup"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-400 px-10 py-4 text-lg font-semibold text-[#0d0d0d] transition hover:bg-amber-300"
          >
            Get the Ebook — It&apos;s free
            <span>→</span>
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Bishu Graphis Design. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
