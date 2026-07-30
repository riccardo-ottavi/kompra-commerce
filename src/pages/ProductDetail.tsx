import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import type { Product } from "../types/product";
import { fetchProductById } from "../api/product";
import Rating from "../components/Rating";
import cartIcon from "../assets/cart-icon.svg";
import { useCart } from "../contexts/CartContext";

export default function ProductDetail() {

    const { id } = useParams();

    const { addToCart } = useCart();

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
        <>
            {product && (
                <div className="details">
                    <img src={product.image} alt={product.title} />
                    <div className="details-text">
                        <span>{product.category.toUpperCase()}</span>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <strong>{product.price.toFixed(2)}€</strong>
                        <Rating
                            rate={product.rating.rate}
                            count={product.rating.count}
                        />
                    </div>
                    <div 
                        className="cart-btn"
                        onClick={()=> addToCart(product)}
                    >
                        <img src={cartIcon} alt="cart-icon" className="cart-icon" />
                    </div>
                </div>
            )}
        </>
    )
}