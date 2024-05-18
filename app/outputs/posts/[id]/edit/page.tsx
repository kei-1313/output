import { postById } from "@/action/post/postById";
import EditPage from "@/features/outputs/components/EditPage/EditPage"

const postDetailEditPage = async({ params }: { params: { id: string } }) => {
  const post = await postById(params.id);
  console.log(post);

  return (
    <EditPage post={post} postId={params.id}/>
  )
}

export default postDetailEditPage
