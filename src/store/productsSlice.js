import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initialState = {
  products: products,
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSeletctedProduct(state, action) {
      const productID = action.payload;
      state.selectedProduct = products.find((p) => p.id === productID);
    },
  },
});
