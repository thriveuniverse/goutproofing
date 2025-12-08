function App() {
  return (
    <div className="min-h-screen bg-beige">
      {/* HERO */}
      <header className="bg-emerald-600 text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            GoutProofing.com
          </h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto">
            Everything Jonathan actually uses to stay 100% flare-free since 2025
          </p>
        </div>
      </header>

      {/* THREE BIG CARDS */}
      <section className="max-w-5xl mx-auto px-6 -mt-12 md:-mt-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <a
            href="https://dailygoutplan.com"
            className="group block bg-white rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl hover:-translate-y-3 transition-all duration-300 border border-gray-100"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-4 group-hover:text-emerald-700">
              Daily Gout Plan
            </h3>
            <p className="text-lg text-gray-700">Free personalized 7-day plan in 30 seconds</p>
          </a>

          {/* Card 2 */}
          <a
            href="https://recipesforgout.com"
            className="group block bg-white rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl hover:-translate-y-3 transition-all duration-300 border border-gray-100"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-4 group-hover:text-emerald-700">
              50+ Gout-Safe Recipes
            </h3>
            <p className="text-lg text-gray-700">Delicious meals that actually lower uric acid</p>
          </a>

          {/* Card 3 */}
          <a
            href="https://goutflare.com"
            className="group block bg-white rounded-3xl shadow-2xl p-10 text-center hover:shadow-3xl hover:-translate-y-3 transition-all duration-300 border border-gray-100"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-4 group-hover:text-emerald-700">
              Flare Emergency Kit
            </h3>
            <p className="text-lg text-gray-700">What to do in the first 24 hours of an attack</p>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16 mt-32 text-center">
        <p className="text-lg">
          © 2025 GoutProofing.com — Built by Jonathan & Mirrie with <span className="text-red-500">♥</span> and zero flares
        </p>
      </footer>
    </div>
  )
}

export default App