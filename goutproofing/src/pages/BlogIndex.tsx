// src/pages/BlogIndex.tsx

import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router-dom";
import { getAllPosts } from "../lib/posts";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Helmet>
        <title>Blog – Gout Proofing</title>
        <meta
          name="description"
          content="Practical, real-world posts on managing and reversing gout – from someone who's lived it."
        />

        <meta property="og:title" content="Gout Proofing Blog" />
        <meta
          property="og:description"
          content="All the latest practical advice for staying flare-free."
        />
        <meta property="og:url" content="https://goutproofing.com/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-emerald-800 text-center mb-12">
          Everything You Need to Know About Gout
        </h1>

        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          You are going to have a lot of questions — we have tried to cover all the
          topics here
        </h2>

        <div className="space-y-12">
          {posts.map((post) => (
            <article
              key={post.filename}
              className="bg-white rounded-xl shadow p-8"
            >
              <h2 className="text-2xl font-bold mb-2">
                <Link
                  to={`/blog/${post.filename}`}
                  className="hover:text-emerald-700"
                >
                  {post.title}
                </Link>
              </h2>

              {post.excerpt && (
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
              )}

              <Link
                to={`/blog/${post.filename}`}
                className="text-emerald-700 font-bold"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
