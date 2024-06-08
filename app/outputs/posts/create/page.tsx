import { currentUser } from "@/action/user/currentUser";
import CreatePage from "@/features/outputs/components/CreatePage/CreatePage"

const OutputsCreatePage = async () => {
  const user = await currentUser();
  return (
    <>
      <CreatePage currentUser={user}></CreatePage>
    </>
  )
}

export default OutputsCreatePage;
