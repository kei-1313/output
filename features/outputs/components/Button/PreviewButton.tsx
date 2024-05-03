'use client';
interface PreviewButtonProps {
  isPreview: boolean;
  handlePreviewClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PreviewButton = ({
  handlePreviewClick,
  isPreview,
}: PreviewButtonProps) => {
  return (
    <>
      {isPreview ? (
        <button
          type="button"
          onClick={handlePreviewClick}
          className="cursor-pointer  rounded-full bg-green-300/50 px-4 py-1.5 text-sm text-slate-500 outline-none transition duration-300"
        >
          プレビュー中
        </button>
      ) : (
        <button
          type="button"
          onClick={handlePreviewClick}
          className="cursor-pointer  rounded-full bg-slate-300/50 px-4 py-1.5 text-sm text-slate-500 outline-none transition duration-300"
        >
          プレビュー
        </button>
      )}
    </>
  );
};

export default PreviewButton;
