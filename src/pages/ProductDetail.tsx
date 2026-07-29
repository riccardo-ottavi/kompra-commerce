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
            <img src={product?.image} alt={product?.title} />
            <div className="details-text">
                <span>{product?.category.toUpperCase()}</span>
                <h2>{product?.title}</h2>
                <p>{product?.description}</p>
                <strong>{product?.price.toFixed(2)}€</strong>
                <span>Rating: {product?.rating.rate}</span>
                <span>Rated by {product?.rating.count} users</span>            
            </div>
        </div>
    )
}