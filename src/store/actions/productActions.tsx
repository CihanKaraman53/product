import { Product, ProductDispatch } from "../../types/product";

async function http<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  return await response.json();
}

export const getProduct = () => async (dispatch: ProductDispatch) => {
  const data = await http<Product[]>("https://fakestoreapi.com/products");

  dispatch({ type: "GET_PRODUCT_SUCCESS", payload: data });
};

