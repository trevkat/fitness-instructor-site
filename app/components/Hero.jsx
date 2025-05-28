export default function Hero() {
    return (
      <section
        className="flex flex-col items-center justify-center text-center py-24 text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-image.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">Transform Your Fitness Journey</h1>
          <p className="text-xl mb-8">Personalized programs designed just for you.</p>
          <button className="px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-100 transition duration-200">
            Get Started
          </button>
        </div>
      </section>
    );
  }