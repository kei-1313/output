import PokemonItem from "../PokemonItem/PokemonItem"

const PokemonList = () => {
  return (
    <div className="max-w-[880px] mx-auto px-4">
      <ul className="grid grid-cols-6 gap-5 max-sm:grid-cols-2 max-md:grid-cols-4">
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
