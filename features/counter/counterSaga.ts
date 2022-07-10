
import { takeEvery ,takeLatest} from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { FindProductSlice } from '../../pages/product/productSlice';

export function* log(action:PayloadAction){
    console.log('log',action,'chạy vào counter Saga');
    
}

export default function* counterSaga(){
    console.log('counter Saga');
     yield takeEvery('auth/login',log)
}

//auth/login
