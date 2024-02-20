import { ReactNode, createContext, useCallback, useEffect, useState } from "react"

export type OrderCoffeeStorage = {
  id: number,
  imageCoffee: string,
  titleCoffee: string,
  price: number,
  quantity: number
}

interface OrderCoffeeContextTypes {
  orderCoffee: OrderCoffeeStorage[];
  buyCoffee: (coffee: OrderCoffeeStorage) => void
  sumQuantityCoffee: () => number
  totalSumPriceCoffee: () => number
}

interface OrderCoffeeContextProviderProps {
  children: ReactNode
}

export const STORAGE_COFFEE_DELIVERY_LIST_COFFEE = '@ignite-coffee_delivery:list-coffee';
export const STORAGE_COFFEE_DELIVERY_QUANTITY = '@ignite-coffee_delivery:quantity';

export const OrderCoffeeContext = createContext({} as OrderCoffeeContextTypes)


export function OrderCoffeeContextProvider({ children }: OrderCoffeeContextProviderProps) {
  const [orderCoffee, setOrderCoffee] = useState<OrderCoffeeStorage[]>([]);
  const [quantityCoffee, setQuantityCoffee] = useState(0)
  const [initPage, setInitPage] = useState<boolean>(false)

  const loadListTask = useCallback(() => {
    if (!initPage) {
      setInitPage(true)
      const listCoffeeStorage = localStorage.getItem(STORAGE_COFFEE_DELIVERY_LIST_COFFEE);
      const quantityCoffeeStorage = localStorage.getItem(STORAGE_COFFEE_DELIVERY_QUANTITY);
      if(listCoffeeStorage) setOrderCoffee(JSON.parse(listCoffeeStorage))
      if(quantityCoffeeStorage) setQuantityCoffee(JSON.parse(quantityCoffeeStorage))
    }
  }, [initPage === false]);

  useEffect(() => {
    localStorage.setItem(STORAGE_COFFEE_DELIVERY_LIST_COFFEE, JSON.stringify(orderCoffee));
    localStorage.setItem(STORAGE_COFFEE_DELIVERY_QUANTITY, JSON.stringify(quantityCoffee));
  }, [loadListTask()]);

  useEffect(() => {
    localStorage.setItem(STORAGE_COFFEE_DELIVERY_LIST_COFFEE, JSON.stringify(orderCoffee));
  }, [orderCoffee]);

  useEffect(() => {
    localStorage.setItem(STORAGE_COFFEE_DELIVERY_QUANTITY, JSON.stringify(quantityCoffee));
  }, [quantityCoffee]);


  function buyCoffee(coffee: OrderCoffeeStorage) {
    const result = orderCoffee.find((value) => value.id === coffee.id);

    if (!result && coffee.quantity > 0) {
      orderCoffee.push(coffee);
      setOrderCoffee(orderCoffee)
    } else {
      const newArray = orderCoffee.map((data) => {
        if (data.id === coffee.id && data.quantity > 0) {
          data.quantity = coffee.quantity;
        }
        return data;
      })
      setOrderCoffee(newArray)
    }

    const newArray = orderCoffee.filter((data) => data.quantity > 0)
    setOrderCoffee(newArray)
    
    let account = 0;
    orderCoffee.forEach((data) => {
      account = account + data.quantity;
    })

    setQuantityCoffee(account)

    localStorage.setItem(STORAGE_COFFEE_DELIVERY_LIST_COFFEE, JSON.stringify(orderCoffee))
  }

  function sumQuantityCoffee(): number {
    return quantityCoffee
  }

  function totalSumPriceCoffee(): number {
    let valorTotal = 0;

     orderCoffee.forEach((coffee: OrderCoffeeStorage) => {
      valorTotal += coffee.price * coffee.quantity;
    });

    return valorTotal;
  }


  return (
    <OrderCoffeeContext.Provider
      value={{
        orderCoffee,
        buyCoffee,
        sumQuantityCoffee,
        totalSumPriceCoffee
      }}
    >
      {children}
    </OrderCoffeeContext.Provider>
  )
}