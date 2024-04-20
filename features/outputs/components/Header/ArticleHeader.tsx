import ToBackButton from '@/features/utils/ToBackButton/ToBackButton';
import React from 'react';
import EditArticle from '../Edit/EditArticle/EditArticle';

const ArticleHeader = () => {
  return (
    <header>
      <div className="flex h-14 items-center justify-between px-4">
        <div className="ml-2">
          <ToBackButton href={'/outputs'} width={30} height={53} />
        </div>
        <div className="mr-4">
          <EditArticle href={'/'} />
        </div>
      </div>
    </header>
  );
};

export default ArticleHeader;
