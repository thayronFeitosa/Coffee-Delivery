import { ReactNode, createContext, useState } from "react"



type OrderCoffee = {
  id: number,
  imageCoffee: string,
  titleCoffee: string,
  price: number,
  quantity: number
}

interface OrderCoffeeContextTypes {
  orderCoffee: OrderCoffee[];
  buyCoffee: (coffee: OrderCoffee) => void
  sumQuantityCoffee: () => number
}

interface OrderCoffeeContextProviderProps {
  children: ReactNode
}

export const OrderCoffeeContext = createContext({} as OrderCoffeeContextTypes)


export function OrderCoffeeContextProvider({ children }: OrderCoffeeContextProviderProps) {
  const [orderCoffee, setOrderCoffee] = useState<OrderCoffee[]>([]);
  const [quantityCoffee, setQuantityCoffee] = useState(0)

  function buyCoffee(coffee: OrderCoffee) {

    const result = orderCoffee.find((value) => value.id === coffee.id);

    if (!result) {
      orderCoffee.push(coffee);
      setOrderCoffee(orderCoffee)
    } else {
      const newArray = orderCoffee.map((data) => {
        if (data.id === coffee.id) {
          data.quantity = coffee.quantity;
        }
        return data;
      })
      setOrderCoffee(newArray)
    }
    let account = 0;
    orderCoffee.forEach((data) => {
      account = account + data.quantity;
    })
    setQuantityCoffee(account)

  }

  function sumQuantityCoffee(): number {


    return quantityCoffee
  }


  return (
    <OrderCoffeeContext.Provider
      value={{
        orderCoffee,
        buyCoffee,
        sumQuantityCoffee
      }}
    >
      {children}
    </OrderCoffeeContext.Provider>
  )
}