import { useContext,} from "react";
import { AppContext } from "../context/context";
import { Item } from "../types/items"

export const useHomeHook = () => {
    const context = useContext(AppContext);
    if(!context) throw new Error('useContext must be inside a provider');
  
    const { items, addItem } = context;
    
    const handleAddItem = (item:Item) => {
        addItem(item);
    }
    return { items, handleAddItem }
}
