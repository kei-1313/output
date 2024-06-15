import Link from 'next/link';
import React from 'react';

interface ArticleCategoryProps {
  categoryName: string;
}

const ArticleCategory = ({ categoryName }: ArticleCategoryProps) => {
  return (
    <li>
      <span className="border-gray-150 text-gray-70 block rounded-lg border px-2.5 py-1.5 text-base">
        {categoryName}
      </span>
    </li>
  );
};

export default ArticleCategory;
