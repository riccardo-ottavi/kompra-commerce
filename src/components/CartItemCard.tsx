import type { CartItem } from "../types/cart";
import { useCart } from "../contexts/CartContext";

type CartItemCardProps = {
    item: CartItem;
};

export default function CartItemCard({item,}: CartItemCardProps) {

    const { updateQuantity, removeFromCart } = useCart();

    return (
        <div
            className="cart-item-card"
        >
            <img
                src={item.image}
                alt={item.title}
            />
            <div className="cart-item-info">
                <h3>
                    {item.title}
                </h3>
                <span>
                    {item.price.toFixed(2)} €
                </span>

                <div className="quantity-controls">
                    <button
                        className="cart-minus-btn"
                        onClick={() =>
                            updateQuantity(
                                item.productId,
                                item.quantity - 1
                            )
                        }
                    >
                        -
                    </button>

                    <span>
                        {item.quantity}
                    </span>

                    <button
                        className="cart-plus-btn"
                        onClick={() =>
                            updateQuantity(
                                item.productId,
                                item.quantity + 1
                            )
                        }
                    >
                        +
                    </button>

                </div>

                <button
                    className="cart-remove-btn"
                    onClick={() =>
                        removeFromCart(item.productId)
                    }
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

