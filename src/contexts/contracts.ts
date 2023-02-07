

export interface ICoffee {
  id: number;
  tags: any;
  name: string;
  description: string;
  photo: string;
  price: number;
}

export interface ICardItems extends ICoffee {
  quantity: number;
}

export interface ICardContextTypes {
  cartItems: ICardItems[];
  addCoffeeToCart: (coffee: ICardItems) => void;
  removeCoffeeToCart: (coffee: ICardItems) => void
}