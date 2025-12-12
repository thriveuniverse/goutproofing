// src/App.tsx
import { Link } from 'react-router-dom';
import { getAllPosts } from './lib/posts';

export default function App() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[#faf6f1]">

      {/* HERO SECTION */}
      <header className="bg-emerald-600 text-white py-6 md:py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
            <img
              src="/jonathan.jpg"
              alt="Jonathan – completely gout-free since 2025"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight">
              Gout Proofing Your Life
            </h1>
            <p className="mt-3 text-lg md:text-xl opacity-90">
              What Jonathan actually uses to stay 100% flare-free
            </p>
          </div>
        </div>
      </header>

      {/* TRUST / BIO SECTION */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight leading-snug text-center mb-12">
            <span>Gout is brutal. Your pain is real. </span>
            <span className="text-emerald-600">And it’s beatable.</span>
          </h2>
          <div className="max-w-prose mx-auto text-gray-700 space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              It’s not an “old man’s disease”, it’s not a “booze and steak” punishment, and
              it’s not because you’re lazy or lack willpower.
            </p>
            <p>
              The internet drowns you in conflicting studies that leave you not only confused but also depressed.
            </p>
            <p className="text-l font-semibold text-gray-900">
              This site is different. Here we cut straight to the practical, actionable stuff...
            </p>
          </div>
        </div>
      </section>

      {/* LATEST BLOG POSTS */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 text-center mb-12">
          Latest from the Trenches
        </h2>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.filename}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-5/12 lg:w-4/12 bg-gradient-to-br from-emerald-500 to-emerald-700"></div>
              
              <div className="p-8 md:p-10 md:w-7/12 lg:w-8/12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-3">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {post.excerpt}
                </p>)}
                <Link
                  to={`/blog/${post.filename}`}
                  className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-700 transition"
                >
                  Read the full post →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

            {/* TOOL CARDS – Now with more punch */}
      <section className="bg-emerald-50 py-20 -mt-12 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 text-center mb-16">
            Your Fastest Wins Start Here
          </h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                title: "Daily Gout Plan",
                desc: "Free personalized 7-day plan in 30 seconds",
                url: "https://dailygoutplan.com",
              },
              {
                title: "50+ Gout-Safe Recipes",
                desc: "Delicious meals that actually drop uric acid",
                url: "https://recipesforgout.com",
              },
              {
                title: "Flare Emergency Kit",
                desc: "What to do in the first 24 hours of an attack",
                url: "https://goutflare.com",
              },
            ].map((tool) => (
              <a
                key={tool.title}
                href={tool.url}
                className="group block bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 p-10 text-center border border-gray-100"
              >
                <div className="bg-emerald-100 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-emerald-200 transition">
                  <span className="text-4xl">→</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-emerald-600 group-hover:text-emerald-700 mb-4">
                  {tool.title}
                </h3>
                <p className="text-lg text-gray-700">{tool.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16 text-center">
        <p className="text-lg">
          © 2025 GoutProofing.com — Built by Jonathan & Mirrie with ♥ and zero flares
        </p>
      </footer>
    </div>
  );
}