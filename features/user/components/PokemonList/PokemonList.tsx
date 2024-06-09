import PokemonItem from "../PokemonItem/PokemonItem"

const PokemonList = () => {
  return (
    <div className="max-w-[880px] mx-auto">
      <ul className="grid grid-cols-6 gap-5">
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
      </ul>
    </div>
  )
}

export default PokemonList
