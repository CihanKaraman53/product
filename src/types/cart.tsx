import { ThunkDispatch } from "redux-thunk";

export interface CartState {
  data: Cart[];
  error: string;
}

export interface Cart {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  count?: number;
}

interface ADD_CART_SUCCESS {
  type: "ADD_CART_SUCCESS";
  payload: Cart;
}


interface DELETE_CART_SUCCESS {
  type: "DELETE_CART_SUCCESS";
  payload: Cart["id"];
}

interface COUNT_INCREASE {
  type: "COUNT_INCREASE";
  payload: Cart["id"];
}

interface COUNT_DECREMENT {
  type: "COUNT_DECREMENT";
  payload: Cart["id"];
}

export type CartAction =
  | ADD_CART_SUCCESS
  | DELETE_CART_SUCCESS
  | COUNT_INCREASE
  | COUNT_DECREMENT;

export type CartDispatch = ThunkDispatch<CartState, void, CartAction>;
