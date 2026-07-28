import { useEffect, useState } from "react";
import { fetchProductList } from "../api/product";
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";

export default function Home() {
    const [productList, setProductList] = useState<Product[]>([]);

    useEffect(() => {
        loadList();
    }, []);

    async function loadList() {
        try {
            const data = await fetchProductList();
            setProductList(data);
        } catch (err) {
            console.error("Couldn't load the products:", err);
        }
    }

    return (
        <div className="products-container">
            {productList && (
                <ul>
                    {productList.map((p) =>(
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