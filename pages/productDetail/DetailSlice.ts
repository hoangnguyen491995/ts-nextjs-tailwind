import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
}

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
  reducers: {
    products: (state, action) => {
      console.log(action);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        console.log(action, "đang chờ");
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        console.log("thành công");
        action.payload.map((res: any) => {
          console.log(res);
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

export const getProducts = createAsyncThunk(
  "productDetail/getProducts",
  async (todo: Todo) => {
    const res = await fetch(
      `https://js-post-api.herokuapp.com/api/products?id=${todo.id}`
    );
    const data = await res.json();

    return data;
  }
);
