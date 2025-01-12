import { BASE_URL } from "../../constants/common"

export const getPokemons = ( position:string, limit:string, page:string)=>{
    console.log(`recibo bien el base_url ${BASE_URL}`)
    return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${position}&limit=${limit}&page=${page}`, {
        method:"GET", 
    })
        
}
export const getPokemonData = ( url: string )=>{
    console.log(`got pokemon url: ${url}`)
    return fetch(url, {
        method:"GET", 
    })
        
}