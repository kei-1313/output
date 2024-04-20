import React from 'react';
import ArticleLength from '../ArticleLength/ArticleLength';

interface CreateFooterProps {
  length: number;
}

const CreateFooter = ({ length }: CreateFooterProps) => {
  return (
    <footer>
      <div className="fixed bottom-10 left-0 flex w-full justify-between px-8">
        <div></div>
        <div className="flex gap-3">
          <div></div>
          <ArticleLength articleLength={length} />
        </div>
      </div>
    </footer>
  );
};

export default CreateFooter;
