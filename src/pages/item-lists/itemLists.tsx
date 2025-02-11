import { useState } from "react";
import ProductCard from "../../components/productCard/productCard"
import useItemLists from "./useItemLists";
import { Pokemon } from "../../types/common";
import { ItemListProps } from "../../types/items";



const ItemLists = ( {handleAddItem}:ItemListProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setLoading] = useState(false);
    const { pokemons } = useItemLists({
        setLoading
      })
  return (
    <div className="flex flex-wrap w-full gap-4">
        {
          pokemons.map(
            (pokemon: Pokemon)=>
              <ProductCard key={pokemon.id} 
                id={pokemon.id}
                image={
                    pokemon.sprites? 
                    pokemon.sprites.front_default : 
                    '../../assets/images/pokeball.png'
                  } 
                  title={pokemon.name} 
                  price={+pokemon.weight * 290} 
                  handleAddItem={handleAddItem}
              /> 
          )
        }
    </div>
  )
}

export default ItemLists