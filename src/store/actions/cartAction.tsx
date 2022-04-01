import { Cart, CartDispatch } from "../../types/cart";

export const addToCard = (cart: Cart) => async (dispatch: CartDispatch) => {
    await dispatch({ type: "ADD_CART_SUCCESS", payload: cart });
 
};

export const deleteCart = (id: Cart["id"]) => (dispatch: CartDispatch) => {
    dispatch({ type: "DELETE_CART_SUCCESS", payload: id });

};

export const countIncrease = (id: number) => (dispatch: CartDispatch) => {
  dispatch({ type: "COUNT_INCREASE", payload: id });
};

export const countDecrement = (id: number) => (dispatch: CartDispatch) => {
  dispatch({ type: "COUNT_DECREMENT", payload: id });
};
