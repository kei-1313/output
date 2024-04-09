"use client"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const Testpage = () => {
  //投稿をPOSTする
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
    reset
  } = useForm<FieldValues>(
    {
      defaultValues: {
        title: '',
      }
    }
  )

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register("title")}
          className="w-full outline-0 leading-relaxed text-xl bg-transparent resize-none"  
          // onChange={(e) => {
          //   e.target.style.height = 'auto';
          //   e.target.style.height = e.target.scrollHeight + 'px';
          // }}
          name="title"
          placeholder="タイトル"
        />
        <div className="lg:text-center">
          <button type="submit" className="w-20 text-center cursor-pointer text-white text-sm rounded-full bg-cyan-950 py-1">保存</button>
        </div>
      </form>
    </div>
  )
}

export default Testpage