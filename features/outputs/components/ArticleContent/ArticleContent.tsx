import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import rehypeExternalLinks from 'rehype-external-links';

interface ArticleContentProps {
  content: string;
}

const ArticleContent = ({ content }: ArticleContentProps) => {
  return (
    <div className="w-full pt-5">
      <Markdown
        className="prose min-w-full"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSanitize,
          [rehypeExternalLinks, { content: { type: 'text', value: '🔗' } }],
        ]}
      >
        {content}
      </Markdown>
    </div>
  );
};

export default ArticleContent;
