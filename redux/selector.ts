import { Res } from "../pages/interface";


interface ActionRes {
  productDetail: {
    res: Res;
  };
}

export const productDetail$ = (state: ActionRes) => {
  console.log(state.productDetail);

  return state.productDetail;
};

export const findProduct$ = (state: any) => {
  console.log(state.findProduct);

  return state.findProduct;
}
