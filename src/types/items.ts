export interface Item {
    id: number;
    name: string;
    price: number;
  }
export  interface AppContextProps {
    items: Item[];
    addItem: (item: Item) => void;
  }
