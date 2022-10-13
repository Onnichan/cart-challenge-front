// import { useEffect, useState } from "react";
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import Grid from "../components/Grid/Grid";
import { Pagination } from "../components/pagination/Pagination";
// import { getProducts } from "../api";

const Products = () => {
  // const [products, setProducts] = useState({});

  // useEffect(() => {
  //   products
  // });

  return (
    <>
      <Header></Header>
      <div className="flex flex-col sm:flex-row">
        <Sidebar />
        <div className="sm:w-4/5">
          <Grid></Grid>
          <Pagination></Pagination>
        </div>
      </div>
    </>
  );
};

export default Products;
