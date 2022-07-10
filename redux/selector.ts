import { Res } from "../pages/interface";


interface ActionRes {
  productDetail: {
    res: Res;
  };
}

export const productDetail$ = (state: ActionRes) => {
  //console.log(state.productDetail);

  return state.productDetail;
};

export const findProduct$ = (state: any) => {
 // console.log(state.findProduct);

  return state.findProduct;
}


export const cart$ = (state: any) => {
 console.log(state.addCart)

  return state.addCart
}





export const login$ = (state: any) => {
 console.log(state.auth);

  return state.auth;
}
