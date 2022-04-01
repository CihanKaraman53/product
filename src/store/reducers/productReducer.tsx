import { ProductAction, ProductState } from "../../types/product";

const defaultState = {
  data: [],
  error: "",
};

const productReducer = (
  state: ProductState = defaultState,
  action: ProductAction
) => {
  switch (action.type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, data: action.payload};
    default:
      return state;
  }
};

export default productReducer;
