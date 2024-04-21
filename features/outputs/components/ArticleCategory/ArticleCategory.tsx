import Link from 'next/link';
import React from 'react';

interface ArticleCategoryProps {
  categoryName: string;
}

const ArticleCategory = ({ categoryName }: ArticleCategoryProps) => {
  return (
    <li>
      <Link
        href="/outputs/"
        className="border-gray-150 rounded-lg border px-2.5 py-1.5 text-base text-gray-700 hover:bg-gray-50"
      >
        {categoryName}
      </Link>
    </li>
  );
};

export default ArticleCategory;
