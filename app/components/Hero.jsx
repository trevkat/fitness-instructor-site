export default function Hero() {
  return (
    <section
      className="flex items-center justify-center text-center py-24 text-white bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url('/hero-image.jpg')",
      }}
    >
      <div className="bg-black/30 backdrop-blur-sm p-10 rounded-2xl max-w-2xl mx-4 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Transform Your Fitness Journey</h1>
        <p className="text-lg md:text-xl mb-8">Personalized programs designed just for you.</p>
        <button className="px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition duration-200">
          Get Started
        </button>
      </div>
    </section>
  );
}