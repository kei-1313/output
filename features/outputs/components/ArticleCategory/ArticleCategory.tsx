import Link from 'next/link';
import React from 'react';

interface ArticleCategoryProps {
  categoryName: string;
}

const ArticleCategory = ({ categoryName }: ArticleCategoryProps) => {
  return (
    <li>
      <span
        className="border-gray-150 rounded-lg block border px-2.5 py-1.5 text-base text-gray-70"
      >
        {categoryName}
      </span>
    </li>
  );
};

export default ArticleCategory;
