// src/pages/blog/[slug].tsx
import { useParams, Link } from 'react-router-dom';
import { getAllPosts, type Post } from '../../lib/posts';
import { useEffect, useState } from 'react';

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

  return (
    <>
      <header className="bg-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/" className="inline-block mb-8 opacity-80 hover:opacity-100">
            ← All posts
          </Link>
          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            {post.title}
          </h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-6 py-16 prose prose-lg prose-emerald mx-auto">
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </article>
    </>
  );
}