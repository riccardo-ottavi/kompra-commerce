import type { Product } from "../types/product"
import { useNavigate } from "react-router-dom";

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {

    const navigate = useNavigate();

    return (
        <div 
            className="product-card"
            onClick={() => navigate(`/product/${product.id}`)}
        >
            <div className="product-card-image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-card-text">
                <span className="category-label">{product.category.toUpperCase()}</span>
                <span className="title-label">{product.title.toUpperCase()}</span>
                <span className="price-label">{product.price.toFixed(2)} €</span>
            </div>
        </div>
    )
}