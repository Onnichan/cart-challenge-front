import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getProductById } from "../api";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const result = await getProductById(id);
      console.log(result);
      setProduct(result);
      setLoading(false);
    };

    getProduct();
  }, []);

  const Loading = () => {
    return <>Loading ...</>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="w-2/4">
          <img
            src={product.image}
            alt={product.name}
            width="400px"
            height="400px"
          />
        </div>
        <div className="w-2/4">
          {/* <h4 className="font-bold text-slate-800">{product.Category.name}</h4> */}
        </div>
        <h1 className="p-5">{product.name}</h1>
        <p className="text-slate-500">Rating</p>
        <h3 className="p-6 font-bold my-4">${product.price}</h3>
        <p className="text-slate-500">{product.description}</p>
        <button className="bg-slate-800 text-slate-50 p-5 rounded-md">
          Add to cart
        </button>
        <NavLink
          to="/cart"
          className="bg-slate-800 text-slate-50 p-5 rounded-md"
        >
          Go to Cart
        </NavLink>
      </>
    );
  };

  return (
    <div>
      <div className="p-5">
        <div className="flex">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
