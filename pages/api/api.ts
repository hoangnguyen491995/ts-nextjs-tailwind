import { axios } from 'axios';

import { useEffect } from 'react';
import { ProductProps, Res } from "../interface";

export const Api = (props: ProductProps) => {
    console.log(props)
    

   useEffect(() => {
      axios
        .get(
          `https://js-post-api.herokuapp.com/api/products`
        )
        .then(function (response:Res) {
               
  
        })
        .catch(function (error:any) {
          console.log(error);
        });
    }, [])


};
//?name_like=${}