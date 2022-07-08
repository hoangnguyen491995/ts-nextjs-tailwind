import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

import { productDetail$ } from "../../redux/selector";
import { ProductDetailProps } from "../../src/component/find/find";
import { Res } from "../interface";

interface List<T> {
  length: number;
  [index: number]: T;
}
const numberList: List<number> = [1, 2, 3];
const wordList: List<string> = ["easy", "frontend"];
numberList.length;
wordList.length;

interface Student {
  id: number;
  name: string;
}
function Product(props: ProductDetailProps) {
  const router = useRouter();
  const prdt:any = useSelector(productDetail$);
  console.log(prdt);

  return (
    <div>
      <div>
        <p> Tên sản phẩm: {prdt.name}</p>
        <img src={prdt.images} alt="" />
         <p>{prdt.salePrice}</p>
        <p>Giá sản phẩm:{prdt.salePrice}</p>
        <p> Free ship: {prdt.isFreeShip}</p>
        <p> Mô tả chi tiết sản phẩm: {prdt.shortDescription}</p>
      
      </div>

      <button onClick={() => router.push("/product")}>
        {" "}
        Danh sách sản phẩm
      </button>

      <button onClick={() => router.push("/form")}> form</button>
    </div>
  );
}

export default Product;
