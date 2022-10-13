const API_URL = "http://localhost:3500/api/v1";

export const getProducts = async (page, size) => {
  const products = await fetch(`${API_URL}/products?page=${page}&size=${size}`);
  const result = await products.json();
  console.log(result);
  return result;
}

// export const getFilter = async ()