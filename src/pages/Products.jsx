import { useEffect, useState } from "react";
import Sidebar from "../shared/Sidebar";
import Grid from "../components/Grid/Grid";
import { Pagination } from "../components/pagination/Pagination";
import { getCategories, getProducts, productsByCategory } from "../api";

const Products = () => {
  const [products, setProducts] = useState({});
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProducts();
        setProducts(result);
        setIsLoading(false);
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCategories();
        setCategories(result);
        console.log(categories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = async (page) => {
    try {
      const result = await getProducts(page);
      setProducts(result);
      setIsLoading(false);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = async (category) => {
    try {
      const data = await productsByCategory(category);
      console.log(data, "data");
      setProducts(data);
      setIsFilter(true);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row">
        {categories && (
          <Sidebar categories={categories} onHandleFilter={handleFilter} />
        )}
        <div className="sm:w-4/5">
          {isLoading ? "Cargando" : <Grid products={products.result} />}
          {!isFilter && (
            <Pagination
              total={products.totalPages}
              currentPage={products.currentPage}
              onHandlePageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
