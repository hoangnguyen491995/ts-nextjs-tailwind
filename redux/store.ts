import { combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";

import DetailSlice from "../pages/productDetail/DetailSlice";

import rootSaga from "./rootSaga";
import createSagaMiddleware from "redux-saga";
import { FindProductSlice } from "../pages/product/productSlice";
import SliceSagaCart from "../pages/product/SliceSagaCart";
import { authSlice } from "../pagesSaga/authSlice";
 

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {
    productDetail: DetailSlice.reducer,
    findProduct: FindProductSlice.reducer,
    addCart: SliceSagaCart.reducer,
    auth:authSlice.reducer
  },

  // middleware:[sagaMiddleware]
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),   
});
sagaMiddleware.run(rootSaga);
export default store;

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
