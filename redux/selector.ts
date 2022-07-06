// export interface Post {
//   name: string;
//   id: number;
//   images: string;
//   shortDescription: string;
//   isFreeShip: boolean;
//   salePrice: number;
// }

export const productDetail$ = (state:any) => {
  console.log(state)

  return state.productDetail
};
