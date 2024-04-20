export interface ArticleTitleProps {
  title: String;
}

const ArticleTitle = ({ title }: ArticleTitleProps) => {
  return <h1 className="text-xl leading-relaxed text-black">{title}</h1>;
};

export default ArticleTitle;
