// src/pages/Manifesto.tsx

import { Helmet } from '@dr.pogodin/react-helmet';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Glob all MDX files in /content/pages/ — works in dev and production
const pageModules = import.meta.glob("/content/pages/*.mdx", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string | { default: string }>;

// Helper to safely extract the string content
function getContent(mod: string | { default: string }): string {
  return typeof mod === "string" ? mod : mod.default ?? "";
}

export default function Manifesto() {
  // Find the manifesto.mdx file (case-insensitive just in case)
  const manifestoPath = Object.keys(pageModules).find((path) =>
    path.toLowerCase().includes("manifesto.mdx")
  );

  if (!manifestoPath) {
    return (
      <article className="max-w-4xl mx-auto px-6 py-16 prose prose-lg prose-emerald">
        <h1>Oops — Manifesto page not found</h1>
        <p>The content couldn't be loaded. Check the file path.</p>
      </article>
    );
  }

  const content = getContent(pageModules[manifestoPath]);

  return (
    <>
      <Helmet>
        <title>Be Like Wallace – Gout Manifesto</title>
        <meta
          name="description"
          content="Why we're refusing the pills-for-life sentence and fighting gout with lifestyle, inspired by Wallace."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Be Like Wallace – Gout Manifesto",
            description:
              "Why we're refusing the pills-for-life sentence and fighting gout with lifestyle – inspired by Wallace, a coal miner who drank beer and never had a flare.",
            url: "https://goutproofing.com/manifesto",
            author: {
              "@type": "Person",
              name: "Jonathan Kelly",
            },
            publisher: {
              "@type": "Organization",
              name: "Gout Proofing",
            },
          })}
        </script>
      </Helmet>

      <article className="max-w-4xl mx-auto px-6 py-16 prose prose-base prose-emerald">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </article>
    </>
  );
}
