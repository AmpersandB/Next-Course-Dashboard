import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata={
  title: "Favorites",
  description: "My custom pokedex",
  };



export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
        <span className="text-5xl my-2">List of <small className="italic">favorite</small> Pokemons</span>
    <PokemonGrid pokemons={[]}/>
    </div>
  );
}