import type { Product } from "../types/product";

const API_URL = import.meta.env.VITE_API_URL;

export async function fetchProductList(): Promise<Product[]> {
  const productRes = await fetch(`${API_URL}/products`);

  if (!productRes.ok) {
    throw new Error("Couldn't fetch products from API");
  }

  const productList: Product[] = await productRes.json();

  console.log(productList)
  return productList;
}