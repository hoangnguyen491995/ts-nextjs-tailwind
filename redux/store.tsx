import { configureStore } from "@reduxjs/toolkit";
import DetailSlice from "../pages/productDetail/DetailSlice";



const store = configureStore({
  reducer: {
    productDetail: DetailSlice.reducer,
   
  }
})

export default store