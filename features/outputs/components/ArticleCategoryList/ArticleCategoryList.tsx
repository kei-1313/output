import React from 'react';
import ArticleCategory from '../ArticleCategory/ArticleCategory';

const ArticleCategoryList = () => {
  return (
    <ul className="mt-12 flex flex-wrap items-center gap-2.5 text-xs leading-normal">
      <ArticleCategory categoryName={'React'} />
      <ArticleCategory categoryName={'React'} />
      <ArticleCategory categoryName={'React'} />
    </ul>
  );
};

export default ArticleCategoryList;
