// src/pages/Resources.tsx
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';

export default function Resources() {
  return (
    <>
      <Helmet>
        <title>Resources – Gout Proofing</title>
        <meta name="description" content="Curated tools, recipes, and plans to help you manage gout effectively." />
      </Helmet>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-emerald-700 text-center mb-12">
          Your Gout Toolkit
        </h1>

 <section className="bg-beige-50 py-20 -mt-12 relative">
              <div className="max-w-6xl mx-auto px-6">
                <p className="text-xl md:text-2xl font-bold text-emerald-800 text-center mb-16">
                  We created these resources becausee we were searching and couldn't find answers and tools that really worked.
                </p>
                <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                  {[
                    { title: "Daily Gout Plan", desc: "Free personalized 7-day plan in 30 seconds", url: "https://dailygoutplan.com" },
                    { title: "50+ Gout-Safe Recipes", desc: "Delicious meals that actually drop uric acid", url: "https://recipesforgout.com" },
                    { title: "Flare Emergency Kit", desc: "What to do in the first 24 hours of an attack", url: "https://goutflarerelief.com" },
                  ].map((tool) => (
                    <a
                      key={tool.title}
                      href={tool.url}
                      className="group block bg-white rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 p-10 text-center border border-gray-100"
                    >
                      <div className="bg-emerald-100 w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-emerald-200 transition">
                        <span className="text-4xl">→</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal group-hover:text-emerald-700 mb-4">
                        {tool.title}
                      </h3>
                      <p className="text-lg text-gray-700">{tool.desc}</p>
                    </a>
                  ))}
                </div>
              </div>
            </section>

        <div className="text-center space-y-8">
          <p className="text-xl">
            Follow us on X for daily tips: 
            <a href="https://x.com/yourhandle" className="text-emerald-700 font-bold ml-2 hover:underline">
              @Jon_thriveclan
            </a>
          </p>

          <p className="text-xl">
            Questions? Stories? Want to share your win? 
            <br />
            Email us at: 
            <a href="mailto:hello@goutproofing.com" className="text-emerald-700 font-bold hover:underline">
              jon@thethriveclan.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}