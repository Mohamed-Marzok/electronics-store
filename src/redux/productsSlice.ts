import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data";
import { IProduct } from "../interfaces";

interface IState {
  products: IProduct[];
}

const initialState: IState = {
  products: products,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
