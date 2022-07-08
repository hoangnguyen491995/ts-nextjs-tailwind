import { createSlice } from "@reduxjs/toolkit";

interface State {
  name: string;
}
export default createSlice({
  name: "productDetail",
  initialState: {
    name: "",
  },
  reducers: {
    FindProduct: (state: State, action) => {
      console.log(action.payload);

      state.name = action.payload;
    },
  },
});
