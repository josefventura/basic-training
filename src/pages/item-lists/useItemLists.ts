import { useEffect, useState } from 'react'
import { getPokemonData, getPokemons } from '../../api/itemLists';
import { Pokemon } from '../../types/common';
import { bulbasaur } from './mock-data';
// import { useQuery } from 'react-query';


const useItemLists = (prop:{setLoading:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const mockData = [new Pokemon(bulbasaur)]
    const page = "1";
    const {setLoading} = prop;
    const limit="20";
    const offset='0'
    const [pokemons, setPokemons] = useState<Pokemon[]>(mockData)

    useEffect(() => {
        setLoading(true)
        const fetchPokemons = async()=>{
          const list = await getPokemons(offset, limit, page).catch((error)=> {
            console.log(`error calling endpoint ${error}}`)
            return null
        });
            const res = list? await list.json(): null;
            if(res.results.length> 0){
                const pokemonData = await Promise.all( await res.results.map(async (element: {name:string, url:string})=> {
                    const pokemonData = await (await getPokemonData(element.url)).json().catch((error)=>console.log(`error catching pokemon data ${error}`));
                    if(pokemonData){
                        return new Pokemon( pokemonData)
                    }
                }))
                console.log(pokemonData)
                setPokemons(pokemonData);
                setLoading(false);
            }
        }
        fetchPokemons();

    }, []) 
    return {
        pokemons, setPokemons
    }
  
}

export default useItemLists