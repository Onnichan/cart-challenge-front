import {  useDispatch } from "react-redux";
import { deleteCart } from "../redux//actions/index";

const Cart = () => {
  // const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(deleteCart(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-neutral-100 rounded-t-md">
        <div className="py-4">
          <button onClick={() => handleClose(cartItem)}></button>
          <div className="flex justify-center">
            <div className="w-1/3">
              <img src={cartItem.image} alt="" height="200px" />
            </div>
            <div className="w-1/3">
              <h3></h3>
              <p className="font-bold">$</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div>
    {cartItems}
  </div>;
};

export default Cart;
