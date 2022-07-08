import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../pages/product/productSlice";
import DetailSlice from "../pages/productDetail/DetailSlice";

const store = configureStore({
  reducer: {
    productDetail: DetailSlice.reducer,
    findProduct: productSlice.reducer,
  },
});

export default store;
