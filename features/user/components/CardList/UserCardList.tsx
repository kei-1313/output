import UserCard from "../Card/UserCard"

const UserCardList = () => {
  return (
    <div className="max-w-[880px] mx-auto ">
      <ul className="grid grid-cols-3 gap-6">
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
      </ul>
    </div>
  )
}

export default UserCardList
