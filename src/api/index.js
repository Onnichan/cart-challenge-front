const API_URL = "http://localhost:3500/api/v1";

export const getProducts = async (page = 1, size = 5) => {
  const products = await fetch(`${API_URL}/products?page=${page}&size=${size}`);
  const result = await products.json();
  console.log(result);
  return result;
};

export const getCategories = async () => {
  const categories = await fetch(`${API_URL}/categories`);
  const result = await categories.json();
  console.log(result);
  return result;
};

export const productsByCategory = async (category) => {
  const productsByCategory = await fetch(`${API_URL}/categories/${category}`);
  const result = await productsByCategory.json();
  // console.log(result);
  return result;
}


export const getProductById = async (id) => {
  const productById = await fetch(`${API_URL}/products/${id}`);
  const result = await productById.json();
  return result;
}
