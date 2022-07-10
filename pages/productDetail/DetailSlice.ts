import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Res } from "../interface";


export default createSlice({
  name: "productDetail",
  initialState: {
    id: 1,
    images: "",
    name: "",
    price: 0,
    shortDescription: "",
    salePrice: 0,
    isFreeShip: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
       // console.log(action, "đang chờ");
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        console.log("thành công");
        action.payload.map((res: Res) => {
        //  console.log(res);
          state.id = res.id;
          state.images = res.images[0];
          state.name = res.name;
          state.price = res.originalPrice;
          state.salePrice = res.salePrice;
          state.isFreeShip = res.isFreeShip;
          state.shortDescription = res.shortDescription;
        });
      })
      .addCase(getProducts.rejected, (state, action) => {
        console.log(action, "thất bại");
      });
  },
});
   


export const getProducts  = createAsyncThunk (
  "productDetail/getProducts",
  async (todo:number) => {
    const res = await fetch(
      `https://js-post-api.herokuapp.com/api/products?id=${todo}`
    );
    const data = await res.json();

    return data;
  }
);
