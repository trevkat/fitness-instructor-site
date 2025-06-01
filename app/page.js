import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="mt-20"> {/* adds spacing below fixed navbar */}
      <Hero />

      <section
        id="about"
        className="min-h-screen bg-white text-black p-12 scroll-mt-20"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>
          I'm a certified fitness coach helping people transform their lives through
          personalized programs, consistency, and motivation.
        </p>
      </section>
    </main>
  );
}