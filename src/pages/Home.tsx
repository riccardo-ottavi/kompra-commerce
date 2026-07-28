import { useEffect, useState } from "react";
import { fetchProductList, fetchProductsByCategory } from "../api/product";
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {

    const [productList, setProductList] = useState<Product[]>([]);

    const [searchParams] = useSearchParams();

    const category = searchParams.get("category");

    useEffect(() => {
        loadProducts();
    }, [category]);

    async function loadProducts() {
        try {
            
            if (category) {
                const data = await fetchProductsByCategory(category);
                setProductList(data);
            }
            else {
                const data = await fetchProductList();
                setProductList(data);
            }


        } catch (error) {

            console.error(
                "Couldn't load products",
                error
            );
        }
    }


    return (
        <div className="products-container">
            {productList && (
                <ul>
                    {productList.map((p) => (
                        <ProductCard
                            key={p.id}
                            product={p}
                        />
                    ))}
                </ul>
            )}
        </div>



    )
}