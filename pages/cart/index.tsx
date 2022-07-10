import { useSelector } from "react-redux";
import { cart$ } from "../../redux/selector";
import { ProductProps } from "../interface";
import { Id } from "../product/SliceSagaCart";


const Cart: React.FC = (props: ProductProps) => {


  const cart: Id = useSelector(cart$)
  console.log(cart)

  return (

    <div>

      <p>{cart.id}</p>

    </div>
  );
};

export default Cart;
