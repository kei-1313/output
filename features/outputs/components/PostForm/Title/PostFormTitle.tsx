import { UseFormRegisterReturn } from 'react-hook-form';

interface PostFormTitleProps {
  register?: UseFormRegisterReturn;
}

const PostFormTitle = ({ register }: PostFormTitleProps) => {
  return (
    <textarea
      {...register}
      className="w-full resize-none bg-transparent text-xl leading-relaxed outline-0"
      onChange={(e) => {
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
      }}
      placeholder="タイトル"
    />
  );
};

export default PostFormTitle;
