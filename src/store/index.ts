import { combineReducers } from "redux";
import productReducer from './reducers/productReducer';
import { ProductState } from './../types/product';
import { CartState } from './../types/cart';
import cartReducer from './reducers/cartReducer';

export interface AppState{
    products: ProductState;
    cart:CartState
}

const rootReducer =combineReducers<AppState>({
products:productReducer,
cart:cartReducer 
})



export default rootReducer