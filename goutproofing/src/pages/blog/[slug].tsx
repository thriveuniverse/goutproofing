// src/pages/blog/[slug].tsx
import { useParams, Link } from 'react-router-dom';
import { getAllPosts, type Post } from '../../lib/posts';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // for tables, strikethrough, etc.
import { Helmet } from '@dr.pogodin/react-helmet'; // ← Your new SEO hero

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const allPosts = getAllPosts();
    const found = allPosts.find(p => p.filename === slug);
    setPost(found ?? null);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#faf6f1] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-emerald-700 mb-6">Post not found</h1>
          <Link to="/" className="text-emerald-600 hover:underline text-xl">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  const fullUrl = `https://goutproofing.com/blog/${slug}`;
  const defaultOgImage = 'https://goutproofing.com/assets/images/social-preview-default.jpg'; // ← create this later

  return (
    <>
      {/* === SEO & Social Magic === */}
      <Helmet>
        <title>{post.title} • Gout Proofing</title>
        <meta name="description" content={post.excerpt || "Practical, no-nonsense advice on managing gout from someone who's lived it."} />
        <link rel="canonical" href={fullUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || "Real-talk gout management."} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content={defaultOgImage} />
        <meta property="og:site_name" content="Gout Proofing" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt || "Real-talk gout management."} />
        <meta name="twitter:image" content={defaultOgImage} />
      </Helmet>

      {/* Structured Data - BlogPosting schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt || "Practical gout management advice from lived experience",
            "author": {
              "@type": "Person",
              "name": "Jonathan Kelly" 
            },
            "publisher": {
              "@type": "Organization",
              "name": "Gout Proofing"
            },
            "url": fullUrl,
            "image": defaultOgImage,
            "keywords": post.tags?.join(", ") || "gout, uric acid, flares, allopurinol"
          })}
        </script>
      </Helmet>

      {/* === Your Beautiful Layout (kept almost identical) === */}
      <header className="bg-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/" className="inline-block mb-8 opacity-80 hover:opacity-100">
            ← All posts
          </Link>
          <h1 className="text-3xl md:text-4xl font-black leading-tight">
            {post.title}
          </h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-6 py-16 prose prose-lg prose-emerald mx-auto">
        {/* Optional: show excerpt under title */}
        {post.excerpt && (
          <p className="text-xl text-gray-700 italic mb-12 -mt-8">
            {post.excerpt}
          </p>
        )}

        {/* Optional: tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-12 -mt-4">
            {post.tags.map(tag => (
              <span key={tag} className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm mr-3">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Main content */}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.body}
        </ReactMarkdown>

        {/* Disclaimer footer */}
        <div className="mt-16 pt-8 border-t-2 border-emerald-200 text-center text-sm text-gray-600">
          <p>
            <strong>Not medical advice.</strong> Always consult your doctor. 
            This is shared from personal experience and research.
          </p>
        </div>
      </article>
    </>
  );
}