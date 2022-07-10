export interface Pokemon {
  name: string;
  url: string;
}

export interface Post {
  name: string;
  url: string;
}

export interface Res {
  id: number;
  images: string;
  name: string;
  originalPrice: number;
  salePrice: number;
  isFreeShip: boolean;
  shortDescription: string;
  price:number
  
}
export interface ProductProps {}
export interface User{
  id:number|string
  name:string
}
