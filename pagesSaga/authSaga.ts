import { PayloadAction } from '@reduxjs/toolkit';
import { fork, take } from "redux-saga/effects";
import { authSlice, LoginPayload } from "./authSlice";

  function* handleLogin(payload:LoginPayload){
    console.log('hanle login saga',payload)
    
  }
  function* handleLogout(){
    console.log('hanle logout saga');
    
  }
  function* watchLoginFlow(){

  while(true){

      const action:PayloadAction<LoginPayload>= yield take(authSlice.actions.login.type)
      yield fork(handleLogin,action.payload)
    
       yield take (authSlice.actions.logout.type)
       yield fork (handleLogout)
  }
   

  }


export function* authSaga(){
   yield fork(watchLoginFlow)
    
}