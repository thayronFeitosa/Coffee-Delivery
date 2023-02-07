import { createContext, ReactNode, useEffect, useState } from "react";
import { produce } from "immer";
import { ICardContextTypes, ICardItems } from "./contracts";


export const CartContext = createContext({} as ICardContextTypes);

interface CartContextProviderProps {
  children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

export function CartContextProvider({ children }: CartContextProviderProps) {

  const [cartItems, setCartItems] = useState<ICardItems[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  function addCoffeeToCart(coffee: ICardItems) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  function removeCoffeeToCart(coffee: ICardItems) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);
  
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        removeCoffeeToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}