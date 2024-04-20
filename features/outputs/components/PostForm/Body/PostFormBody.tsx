import { UseFormRegisterReturn } from "react-hook-form";

interface PostFormBodyProps {
  register?: UseFormRegisterReturn;
  source: string;
  setSource(event: string): void;
}

const PostFormBody = ({register, source, setSource}: PostFormBodyProps) => {
  return (
    <textarea
      {...register}
      className="w-full resize-none bg-transparent leading-relaxed outline-0"
      placeholder="本文を書く"
      value={source}
      onChange={(e) => {
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
        setSource(e.target.value);
      }}
      autoFocus
    />
  )
}

export default PostFormBody
