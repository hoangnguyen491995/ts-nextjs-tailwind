import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../productDetail/DetailSlice";
import Find from "../../src/component/find/find";
import { findProduct$ } from "../../redux/selector";
import useDebounce from "../../hooks/useDebounce";
import { Button } from "@material-ui/core";
import { Res } from "../interface";

export interface ProductProps {}
export interface Post {
  name: string;
  images: string;
}

export interface Posts {}

interface Finds {
  name: string;
}
export default function Product(props: ProductProps) {
  const dispatch = useDispatch();
  const FindProduct: Finds = useSelector(findProduct$);
  console.log(FindProduct);
  const debounced = useDebounce(FindProduct.name, 800);
  const [posts, setPosts] = useState<Posts[]>([]);
  const router = useRouter();
  const handleRouter = () => {
    router.push("/")
  }
  useEffect(() => {
    axios
      .get(
        `https://js-post-api.herokuapp.com/api/products?name_like=${debounced}`
      )
      .then(function (response) {
        setPosts(response.data);

      })
      .catch(function (error) {
        console.log(error);
      });
  }, [debounced]);

   console.log(posts)
   

  return (
    <div>
      <button className=" scroll-mb-6" onClick={handleRouter}>
        home
      </button>
      <Find />
      {posts !== [] &&
        posts.map((post:any, index: number) => {
          return (
            <div className="row-auto" key={index}>
              <div>
                <p>{post.name}</p>
                <img className="w-32" src={post.images[0]} alt="" />

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    dispatch(getProducts(post.id));
                    router.push("/productDetail");
                  }}
                >
                  chi tiết sản phẩm
                </Button>
                <Button variant="contained"
                  color="primary"
                  onClick={() => {
                    dispatch(getProducts(post.id));
                    router.push("/cart");
                  }}

                  > Thêm vào giỏ hàng</Button>
              </div>
            </div>
          );
        })}
    </div>
  );
}


