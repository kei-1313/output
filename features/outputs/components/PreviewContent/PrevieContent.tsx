
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import rehypeExternalLinks from 'rehype-external-links';

interface PrevieContentProps {
  title: string;
  source: string;
}

const PrevieContent = ({title, source}: PrevieContentProps) => {
  return (
    <article>
      <div className="mb-4 pb-3 border-b border-slate-400/50 ">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <div className="w-full pt-5">
        <Markdown
          className="prose min-w-full"
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[
            rehypeSanitize,
            [rehypeExternalLinks, { content: { type: 'text', value: '🔗' } }],
          ]}
        >
          {source}
        </Markdown>
      </div>
    </article>
  )
}

export default PrevieContent
