export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-black text-center text-white"
    >
      {/* Brand name (EN | AR) */}
      <h1 className="text-2xl font-bold tracking-wide md:text-3xl text-white/90">
        CataLyft <span className="mx-2">|</span> كاتاليفت
      </h1>

      {/* Hero tagline */}
      <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
        Lift, Align, Launch.
      </h2>

      {/* Subtitle */}
      <h3 className="mt-2 text-xl font-semibold tracking-wide">
        Your launchpad into the Saudi market.
      </h3>

      {/* Description paragraph */}
      <p className="mt-4 max-w-2xl px-6 text-gray-400 text-base md:text-lg">
        CataLyft helps companies stabilize, structure, and scale in Saudi
        Arabia. From government licensing to local operations setup, we handle
        the heavy lifting so you can focus on growth.
      </p>

      {/* CTA */}
      <div className="mt-8">
        <a
          href="/products"
          className="rounded-md border border-white bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-100"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
}
