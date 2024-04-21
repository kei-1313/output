'use client';

interface ArticleLengthProps {
  articleLength: number;
}

const ArticleLength: React.FC<ArticleLengthProps> = ({ articleLength }) => {
  return (
    <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-slate-500">
      <span className="block text-sm text-slate-500">{articleLength}</span>
    </div>
  );
};

export default ArticleLength;
