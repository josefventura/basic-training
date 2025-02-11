import { useContext,} from "react";
import { AppContext } from "../../context/context";
import { Item } from "../../types/items";


export const useAddItems = () => {
    
    const context = useContext(AppContext);
    if(!context) throw new Error('useContext must be inside a provider');
  
    const { items, addItem } = context;

    const handleClicked = ({name, price, id}:Item) => {
        addItem({name, price, id }); 
      }
    

    return { items, handleClicked }
}