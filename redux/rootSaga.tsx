import { takeEvery, delay, put } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";
import { all, call } from "redux-saga/effects";
import counterSaga from "../features/counter/counterSaga";
import { Api } from "../pages/api/api";
import { Res } from "../pages/interface";
import { Posts } from "../pages/product";
import SliceSagaCart from "../pages/product/SliceSagaCart";

// call(fn: (...args: any[]) => any, ...args: any[]): CallEffect<unknown>


  

export function* handleAddCartSaga(action: PayloadAction<number>) {
  console.log('log', action.payload);
  // try{
  // // const cart:Res=  yield call (Api.handleAddCartSaga, action.payload)
  //   yield put ({type:"cart/addCartSuccess",cart:cart})
  // }catch(e:any){
  //   yield put ({type:"cart/addCartfailed",message:e.message})
  // }
 // yield put(SliceSagaCart.actions.addCartSuccess(action.payload))


}
export default function* rootSaga() {
  console.log("Root saga");
  yield takeEvery(SliceSagaCart.actions.addCart.toString(), handleAddCartSaga)
}













// export default function* rootSaga() {
//   console.log("Root saga");
//   yield all([authSaga(),counterSaga()])
// }



// axios
  //   .get(
  //     `https://js-post-api.herokuapp.com/api/products?id=${action.payload}`
  //   )
  //   .then(function (res:any) {
  //     console.log(res.data,'trong saga')
  //     setPosts(res.data)
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  // yield put(SliceSagaCart.actions.addCartSuccess(action.payload))