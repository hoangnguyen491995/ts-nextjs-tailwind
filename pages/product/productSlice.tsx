import { createSlice } from "@reduxjs/toolkit";

interface State {
  name: string;
}
export const FindProductSlice= createSlice({
  name: "find",
  initialState: {
    name: "",
  },
  reducers: {
    FindProduct: (state: State, action) => {
    //  console.log(action.payload);

      state.name = action.payload;
    },
  },
});
