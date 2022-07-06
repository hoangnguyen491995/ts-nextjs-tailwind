import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getProducts } from "../productDetail/DetailSlice";


export interface ProductProps {}
export interface Post {
  name: string;
  id: number;
  images: string;
  shortDescription: string;
  isFreeShip: boolean;
  salePrice: number;
}
interface Todo {
  id: number;
}
export interface Posts {}

export default function Product(props: ProductProps) {
  const dispatch = useDispatch();

  const [posts, setPosts] = useState<Posts[]>([]);
  const router = useRouter()
  const handleRouter = () => {
    router.push("/");
  };
  useEffect(() => {
    axios
      .get("https://js-post-api.herokuapp.com/api/products")
      .then(function (response) {
        // handle success

        setPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  // const handleProductDetail = () => {
  //    dispatch(getProducts)
  //   router.push("/productDetail")
  // };

  return (
    <div>
      <button onClick={handleRouter}>home</button>
      {posts !== [] &&
        posts.map((post: any, index: number) => {
          return (
            <div
              key={index}
             
            >
              <p>{post.name}</p>
                <img src={post.images[0]} alt="" />
                <button  onClick={() => {
                dispatch(getProducts({id:post.id }));
               router.push("/productDetail")
              }} > chi tiết sản phẩm </button>
           
            </div>
          );       
        })}
      List Product
    </div>
  );
}
