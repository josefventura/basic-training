import { useState } from "react";
import ProductCard from "../../components/productCard/productCard"
import useItemLists from "./useItemLists";
import { Pokemon } from "../../types/common";

const ItemLists = () => {
    const [loading, setLoading] = useState(false);
    console.log(loading)
    const { pokemons } = useItemLists({
        setLoading
      });
      console.log(`impresion de pokemones: ${JSON.stringify(pokemons)}`)
  return (
    <div className="flex flex-wrap w-full gap-4">
        {pokemons.map((pokemon: Pokemon)=><ProductCard key={pokemon.id} image={pokemon.sprites? pokemon.sprites.front_default : '../../assets/images/pokeball.png'} title={pokemon.name} price={+pokemon.weight * 290} rating={0}/> )}
    </div>
  )
}

export default ItemLists