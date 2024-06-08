const getPokemonImage = async () => {
  const baseUrl = process.env.POKEMON_BASE_URL;
  const max = 1024;
  const pokemonRandomNumber = Math.floor(Math.random() * max) + 1;
  const url = baseUrl + pokemonRandomNumber.toString();

  const res = await fetch(url);
  const data = await res.json();
  // const imageUrl = data.species.url;
  const image = data.sprites.front_default;

  return image;
};

export default getPokemonImage;
