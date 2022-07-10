import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FindProductSlice } from "../../../pages/product/productSlice";


export interface ProductDetailProps {}

function Find(props: ProductDetailProps) {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const handleInput = (e: any) => {
    console.log(e.target.value);

    setValue(e.target.value);

    dispatch(FindProductSlice.actions.FindProduct(e.target.value));
  };

  return (
    <div>
      <form className=" flex justify-center space-x-4  ">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            aria-label="Full name"
            placeholder="Nhập tên sản phẩm"
            onChange={handleInput}
            value={value}
          
          />
          <Button variant="contained" color="secondary" className="text-blue-600" type="button">
            Tìm kiếm
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Find;
