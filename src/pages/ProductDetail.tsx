import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import type { Product } from "../types/product";
import { fetchProductById } from "../api/product";

export default function ProductDetail() {

    const { id } = useParams();

    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {

        async function loadProduct() {
            if (!id) return;
            const data = await fetchProductById(id);
            setProduct(data);
        }

        loadProduct();

    }, [id]);

    return (
        <div className="details">
            <img src={product?.image} alt="" />
            <div className="details-text">
                <span>{product?.category}</span>
                <span>{product?.title}</span>
                <p>{product?.description}</p>
                <span>{product?.price.toFixed(2)}€</span>
                <span>{product?.rating.rate}</span>
                <span>{product?.rating.count}</span>            
            </div>
        </div>
    )
}