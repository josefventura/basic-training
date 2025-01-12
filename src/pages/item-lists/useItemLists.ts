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
            console.log(`got pokemons ${res.results.length}`);
            console.log(`pokemons: ${JSON.stringify(res.results)} `)
            if(res.results.length> 0){
                const pokemonData = await Promise.all( await res.results.map(async (element: {name:string, url:string})=> {
                    const pokemonData = await (await getPokemonData(element.url)).json().catch((error)=>console.log(`error catching pokemon data ${error}`));
                    
                    console.log(`got pokemon data ${JSON.stringify(pokemonData)}`)
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
    // const fetchPokemons = async (offset: string, limit: string, page: string) => {
    //     try {
    //       const list = await getPokemons(offset, limit, page);
    //       const res = await list.json();
          
    //       console.log(`Got pokemons ${res.results.length}`);
          
    //       if (res.results.length > 0) {
    //         const pokemonData = await Promise.all(
    //           res.results.map(async (element: { name: string; url: string }) => {
    //             try {
    //               const pokemonResponse = await getPokemonData(element.url);
    //               const pokemonData = await pokemonResponse.json();
    //               console.log(`Got pokemon data ${JSON.stringify(pokemonData)}`);
    //               return new Pokemon(pokemonData);
    //             } catch (error) {
    //               console.log(`Error fetching pokemon data: ${error}`);
    //               return null;
    //             }
    //           })
    //         );
            
    //         return pokemonData.filter(Boolean); // Elimina los valores `null`
    //       }
      
    //       return [];
    //     } catch (error) {
    //       console.log(`Error calling endpoint: ${error}`);
    //       throw error;
    //     }
    //   };
      

      
        // if (isLoading) return <p>Loading...</p>;
        // if (error) return <p>Error loading pokemons: {error.message}</p>;
      
    return {
        pokemons, setPokemons
    }
  
}

export default useItemLists