import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

import { productDetail$ } from "../../redux/selector";

export interface ProductDetailProps {}

function Product(props: ProductDetailProps) {
  const router = useRouter()
  const productdetail = useSelector(productDetail$);
  console.log(productdetail)

  return (
        <div>

             <div>
              <p> Tên sản phẩm: {productdetail.name}</p>

              <img src={productdetail.images} alt="" />

           
              <p>Giá sản phẩm:{productdetail.price}</p>
              <p> Free ship: {productdetail.isFreeShip}</p>
              <p> Mô tả chi tiết sản phẩm: {productdetail.shortDescription}</p>

             </div>
             <button onClick={()=>router.push("/product") }> quay lại danh sách sản phẩm</button>
        </div>
  );
}

export default Product;
