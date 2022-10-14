import { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getProductById } from "../api";
import { addCart } from "../redux/actions";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  } 

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
        <div className="w-2/4 hidden md:flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            width="400px"
            height="400px"
          />
        </div>
        <div className="md:w-2/4 p-4">
          {/* <h4 className="font-bold text-slate-800">{product.Category.name}</h4> */}
          <h1 className="py-6 text-4xl m-0">{product.name}</h1>
          {/* <p className="text-slate-500">Rating</p> */}
          <h3 className="py-6 font-bold my-1 text-3xl">$ {product.price}</h3>
          <p className="text-slate-500 mb-5">{product.description}</p>
          <button className="bg-slate-800 mr-5 text-slate-50 p-3 rounded-md" onClick={() => addProduct(product)}>
            Add to cart
          </button>
          <NavLink
            to="/cart"
            className="bg-slate-800 text-slate-50 p-3 rounded-md"
          >
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="p-8">
        <div className="flex">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
