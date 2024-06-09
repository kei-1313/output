import Image from "next/image"

const PokemonItem = () => {
  return (
    <li className="border-[1px] border-slate-200 rounded-xl">
      <div className="py-5 flex justify-center rounded-t-xl">
        <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png" width={70} height={70} alt=""/>
      </div>
    </li>
  )
}

export default PokemonItem
