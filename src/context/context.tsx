import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { AppContextProps, Item } from '../types/items';

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Item[]>(() => {
    const storedItems = localStorage.getItem('appContextItems');
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('appContextItems', JSON.stringify(items));
  }, [items]);

  const addItem = (item: Item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <AppContext.Provider value={{ items, addItem }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };