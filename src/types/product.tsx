import { ThunkDispatch } from "redux-thunk";

export interface ProductState {
  data: Product[];
  error: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

interface GET_PRODUCT_SUCCESS {
  type: "GET_PRODUCT_SUCCESS";
  payload: Product[];
}




export type ProductAction =
  | GET_PRODUCT_SUCCESS

export type ProductDispatch = ThunkDispatch<ProductState, void, ProductAction>;
