import Link from 'next/link'
import Image from 'next/image';
import {  IoHeartOutline } from 'react-icons/io5';
import { SimplePokemon } from '../';

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({pokemon}: Props) => {
    const {id, name} = pokemon;
    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="text-center p-6 bg-gray-800 border-b flex flex-col items-center">
                <Image
                    key={id} 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width={100}
                    height={100}
                    alt={name}  
                    priority={false} 
                />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    <p className="text-sm text-gray-100">{`${name}@pokemons.dot`}</p>
                    <div className="mt-5">
                        <Link
                            href={`/dashboard/pokemon/${id}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                            aria-label={`More info about ${name}`}
                        >
                            More Info
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <Link href="/dashboard/main">
                        <div className="px-4 py-2 hover:bg-gray-100 flex items-center">
                            <div className="text-red-600">
                                <IoHeartOutline />
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    Make Favorite
                                </p>
                                <p className="text-xs text-gray-500">Add to your favorites list</p>
                            </div>
                        </div>
                    </Link>                    
                </div>
            </div>
        </div>
    )
}
