import UserCard from "../Card/UserCard"

const UserCardList = () => {
  return (
    <div className="max-w-[880px] mx-auto px-4">
      <ul className="grid grid-cols-3 gap-6 max-sm:grid-cols-1 max-md:grid-cols-2">
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
