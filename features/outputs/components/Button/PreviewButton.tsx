"use client";
interface PreviewButtonProps {
  isPreview: boolean;
  handlePreviewClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const PreviewButton = ({handlePreviewClick, isPreview}: PreviewButtonProps) => {
  return (
    <>
      {isPreview? (
        <button
          type="button"
          onClick={handlePreviewClick}
          className="text-sm  text-slate-500 outline-none cursor-pointer rounded-full px-4 py-1.5 transition duration-300 bg-green-300/50"
        >
          プレビュー中
        </button>
      ):(
        <button
          type="button"
          onClick={handlePreviewClick}
          className="text-sm  text-slate-500 outline-none cursor-pointer rounded-full px-4 py-1.5 transition duration-300 bg-slate-300/50"
        >
          プレビュー
        </button>
      )}
    </>
  )
}

export default PreviewButton
