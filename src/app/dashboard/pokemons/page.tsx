import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata={
  title: "Pokemon Grid",
  description: "Api based pokedex",
  };

const getPokemons = async (limit = 20, offset = 0):Promise <SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json())

    const pokemons = data.results.map( pokemon  =>({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }))

    //throw new Error ('Fake error generated')

    return pokemons;
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
        <span className="text-5xl my-2">Pokemons <small className="italic">static</small> List</span>
    <PokemonGrid pokemons={pokemons}/>
    </div>
  );
}