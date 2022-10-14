/* eslint-disable react/prop-types */
import CartIcon from "../../assets/icons/cart_icon.png";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ product }) => {



  return (
    <div className="flex flex-col rounded-lg border-slate-900 shadow-lg">
      <div className="w-full h-60 flex justify-center items-center">
        <img src={product.image} alt="asdas" className="block w-1/3" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <span className="text-slate-500">{product.name}</span>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span>Price:</span>
            <span className="font-bold text-slate-900">${product.price}</span>
          </div>
          <NavLink
            to={`/products/${product.id}`}
            type="button"
            className="bg-violet-500 w-16 flex justify-center items-center border rounded-lg"
          >
            <img src={CartIcon} alt="" width={28} height={28} className="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
