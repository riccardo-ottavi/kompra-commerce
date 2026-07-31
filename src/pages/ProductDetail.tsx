import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import type { Product } from "../types/product";
import { fetchProductById } from "../api/product";
import Rating from "../components/Rating";
import cartIcon from "../assets/cart-icon.svg";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";
import starFull from "../assets/star-full.svg"
import starEmpty from "../assets/star-regular-empty.svg"

export default function ProductDetail() {

    const { id } = useParams();

    const { isInWishlist, removeFromWishlist, addToWishlist } = useWishlist();

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

    if (!product) {
        return <p>Loading...</p>;
    }

    const isFavorite = isInWishlist(product.id);

    return (
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
            <div className="item-menu">
                <button
                    className="wishlist-btn"
                    onClick={() =>
                        isFavorite
                            ? removeFromWishlist(product.id)
                            : addToWishlist(product)
                    }
                >
                    <img
                        src={isFavorite ? starFull : starEmpty}
                        alt={
                            isFavorite
                                ? "Remove from wishlist"
                                : "Add to wishlist"
                        }
                    />
                </button>
                <div
                    className="cart-btn"
                    onClick={() => addToCart(product)}
                >
                    <img src={cartIcon} alt="cart-icon" className="cart-icon" />
                </div>
            </div>
        </div>
    )
}