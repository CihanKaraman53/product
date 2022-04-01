import { CartAction, CartState } from "./../../types/cart";

const defaultState = {
  data: [],
  error: "",
};

const cartReducer = (state: CartState = defaultState, action: CartAction) => {
  switch (action.type) {
    case "ADD_CART_SUCCESS":
      return {
        ...state,
        data: [{ ...action.payload, count: 1 }, ...state.data],
      };
    case "DELETE_CART_SUCCESS":
      return {
        ...state,
        data: state.data.filter((cart) => cart.id !== action.payload),
      };
    case "COUNT_INCREASE":
      let increaseCount = state.data.map((newCount) =>
        action.payload === newCount.id
          ? { ...newCount, count: newCount.count && newCount.count + 1 }
          : newCount
      );
      return { ...state, data: increaseCount };

    case "COUNT_DECREMENT":
      let updateCount = state.data.map((newCount) =>
        action.payload === newCount.id
          ? { ...newCount, count: newCount.count && newCount.count - 1 }
          : newCount
      );
      return { ...state, data: updateCount };
    default:
      return state;
  }
};

export default cartReducer;
