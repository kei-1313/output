import UserCardList from "@/features/user/components/CardList/UserCardList"
import UserInfo from "@/features/user/components/Info/UserInfo"
import PokemonList from "@/features/user/components/PokemonList/PokemonList"
import Tab from "@/features/utils/Tab/Tab"
import TabItem from "@/features/utils/TabItem/TabItem"

const userPage = () => {
  return (
    <div>
      <UserInfo/>
      <Tab defaultKey="item1">
        <TabItem tabKey="item1" label="Articles">
          <UserCardList/>
        </TabItem>
        <TabItem tabKey="item2" label="ゲットしたポケモン">
          <PokemonList/>
        </TabItem>
      </Tab>

    </div>
  )
}

export default userPage
