import { combineReducers } from "@reduxjs/toolkit";
import { productsReducer } from "./ProductsRedux/themeReducer";

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
