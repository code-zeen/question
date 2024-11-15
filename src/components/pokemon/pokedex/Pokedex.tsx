import { PokemonType } from "../types/pokemonType";
import PokedexHeader from "./PokedexHeader";
import PokedexList from "./PokedexList";

interface PokedexProps {
    pokemons: PokemonType[]
}

function Pokedex({ pokemons }: PokedexProps) {
    return (
        <div>
            <div className="flex flex-col gap-2 bg-gray-100">
                <PokedexHeader />
                <div className="flex">
                    <PokedexList pokemons={pokemons} />
                </div>
            </div>
        </div>
    )
}

export default Pokedex