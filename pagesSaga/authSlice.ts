import { PayloadAction,createSlice  } from '@reduxjs/toolkit'
import { User } from '../pages/interface'
export interface AuthState{
    isloggedIn:boolean
    logging?:boolean
    currentUser?:User
}
const initialState:AuthState={
    isloggedIn:false,
    logging:false,
    currentUser:undefined
}
  export interface LoginPayload{
  username:string
  password:string
  }
export const authSlice=createSlice ({
    name:'auth',
    initialState,
    reducers:{
        login(state,action:PayloadAction<LoginPayload>){
            console.log('dispatch ok ok ');
            
                state.logging=true
        },
        loginSuccess(state,action:PayloadAction<User>){
            state.isloggedIn=true
            state.logging=false
            state.currentUser=action.payload      
        },
        loginFailed(state,action:PayloadAction<string>){            
            state.logging=false
        },
         logout(state){
             state.isloggedIn=false
            state.currentUser=undefined
         }
    }
}) 