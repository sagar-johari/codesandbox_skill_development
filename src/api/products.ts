import api from "./axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

// ✅ GET all products
export const fetchProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>("/products");
  return response.data;
};

// ✅ GET single product
export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await api.get<Product>(`/products/${id}`);
  return response.data;
};

// ✅ POST (create new product)
export const createProduct = async (newProduct: Omit<Product, "id">): Promise<Product> => {
  const response = await api.post<Product>("/products", newProduct);
  return response.data;
};

// ✅ PUT (update full product)
export const updateProduct = async (id: number, updatedProduct: Omit<Product, "id">): Promise<Product> => {
  const response = await api.put<Product>(`/products/${id}`, updatedProduct);
  return response.data;
};

// ✅ DELETE (remove product)
export const deleteProduct = async (id: number): Promise<void> => {
  await api.delete(`/products/${id}`);
};
