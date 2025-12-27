import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import aboutContent from '/content/pages/about.mdx?raw';

export default function About() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16 prose prose-lg prose-emerald">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {aboutContent}
      </ReactMarkdown>
    </article>
  );
}