import type { Product } from "../types/product";

const API_URL = import.meta.env.VITE_API_URL;

export async function fetchProductList(): Promise<Product[]> {
  const productRes = await fetch(`${API_URL}/products`);

  if (!productRes.ok) {
    throw new Error("Couldn't fetch products from API");
  }

  const productList: Product[] = await productRes.json();

  return productList;
}

export async function fetchProductsByCategory(
    category: string
): Promise<Product[]> {

    const res = await fetch(
        `${API_URL}/products/category/${category}`
    );

    if (!res.ok) {
        throw new Error("Couldn't fetch products by category");
    }

    const products: Product[] = await res.json();

    return products;
}


export async function fetchCategories(): Promise<string[]> {

    const res = await fetch(
        `${API_URL}/products/categories`
    );

    if (!res.ok) {
        throw new Error("Couldn't fetch categories");
    }

    const categories: string[] = await res.json();

    return categories;
}