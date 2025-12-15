// Utility to load posts from MDX files
import matter from 'gray-matter';
// Fallback direct import to ensure at least one post renders if glob fails
import fallbackPost from '/content/posts/test-post.mdx?raw';

// Type for post frontmatter
export type Post = {
  title: string;
  excerpt?: string;
  tags?: string[];
  filename: string;
  body: string;
};

// Load all MDX files from content/posts as raw text
// Use an absolute-from-project-root path; ?raw ensures we get file contents
const postModules = import.meta.glob('/content/posts/*.mdx', { eager: true, import: 'default', as: 'raw' }) as Record<string, { default: string } | string>;

export function getAllPosts(): Post[] {
  const posts: Post[] = [];

  // Debug: log what files were found
  console.log('Post modules found:', Object.keys(postModules));

  for (const [path, mod] of Object.entries(postModules)) {
const filename = path
  .split('/')
  .pop()!                   
  .replace(/\.mdx$/, '');   
    // Normalize content (string or { default: string })
    const content =
      typeof mod === 'string'
        ? mod
        : (mod as any)?.default ?? '';

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

  // Fallback: if nothing was loaded, try the direct import
  if (posts.length === 0 && typeof fallbackPost === 'string') {
    const { data, content: body } = matter(fallbackPost);
    posts.push({
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      tags: data.tags || [],
      filename: 'test-post',
      body,
    });
    console.log('Fallback post added from direct import');
  }

  console.log('Total posts loaded:', posts.length);

  console.log(`Total posts loaded: ${posts.length}`, posts);

  // Sort by filename (you can change this to sort by date if you add a date field)
  return posts.sort((a, b) => a.filename.localeCompare(b.filename));
}

// Convert posts to TinaCMS format
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

