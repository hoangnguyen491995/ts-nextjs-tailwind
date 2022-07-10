import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Id{
  id:number
 }
export default createSlice({
  name: "cart",
  initialState: {
    id:1
  },
  reducers: {
    addCart: (state:Id) => {
       //console.log(action.payload)
       
        
    },
    addCartSuccess:(state,action:PayloadAction<number>)=>{
        console.log(action,action.payload,'ok');
          
              state.id=action.payload
    },
    addCartfailed:(state)=>{
        console.log('failed ')
          
          
    }
  },
 
})
