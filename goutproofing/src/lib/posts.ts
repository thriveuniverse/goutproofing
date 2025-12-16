/// <reference types="vite/client" />
import matter from 'gray-matter';

// Type for post frontmatter
export type Post = {
  title: string;
  excerpt?: string;
  tags?: string[];
  filename: string;
  body: string;
};

// Load all MDX files from content/posts as raw text
// Updated for Vite 6+: use query: '?raw' instead of as: 'raw'
const postModules = import.meta.glob('/content/posts/*.mdx', {
  eager: true,
  query: '?raw',
  import: 'default'
}) as Record<string, string | { default: string }>;

export function getAllPosts(): Post[] {
  const posts: Post[] = [];

  // Debug: log what files were found
  console.log('Post modules found:', Object.keys(postModules));

  for (const [path, mod] of Object.entries(postModules)) {
    const filename = path
      .split('/')
      .pop()!
      .replace(/\.mdx$/, '');

    // Normalize content
    const content = typeof mod === 'string' ? mod : mod.default ?? '';

    // Debug: log each file being processed
    console.log('Processing post:', filename, 'Content length:', content.length || 0);

    // Parse frontmatter and content
    const { data, content: body } = matter(content);

    posts.push({
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      tags: data.tags || [],
      filename,
      body,
    });
  }

  console.log('Total posts loaded:', posts.length);
  console.log(`Total posts loaded: ${posts.length}`, posts);

  // Sort by filename (or add a date field later for better sorting)
  return posts.sort((a, b) => a.filename.localeCompare(b.filename));
}

// Convert posts to TinaCMS format (if you're using Tina)
export function getPostsAsTinaData() {
  const posts = getAllPosts();
  
  return {
    postConnection: {
      edges: posts.map((post) => ({
        node: {
          title: post.title,
          excerpt: post.excerpt,
          _sys: {
            filename: post.filename,
          },
        },
      })),
    },
  };
}