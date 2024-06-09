import { postByUser } from "@/action/post/postByUser"
import { currentUser } from "@/action/user/currentUser"
import userById from "@/action/user/userById"
import ArchiveHeader from "@/features/outputs/components/Header/ArchiveHeader"

import UserCardList from "@/features/user/components/CardList/UserCardList"
import UserInfo from "@/features/user/components/Info/UserInfo"
import PokemonList from "@/features/user/components/PokemonList/PokemonList"
import Tab from "@/features/utils/Tab/Tab"
import TabItem from "@/features/utils/TabItem/TabItem"

const userPage = async ({ params }: { params: { id: string } }) => {
  const postUser = await userById(params.id);
  const posts = await postByUser(params.id, 0);
  const user = await currentUser();

  return (
    <div className="pb-20 pt-6">
      <ArchiveHeader image={user?.image} isBackButton={true}/>
      <UserInfo postUser={postUser}/>
      <Tab defaultKey="item1">
        <TabItem tabKey="item1" label="Articles">
          <UserCardList posts={posts}/>
        </TabItem>
        <TabItem tabKey="item2" label="ゲットしたポケモン">
          <PokemonList posts={posts}/>
        </TabItem>
      </Tab>
    </div>
  )
}

export default userPage
