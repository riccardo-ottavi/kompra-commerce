import CartItemCard from "../components/CartItemCard";
import { useCart } from "../contexts/CartContext";

export default function Cart() {

    const { cartItems, getCartTotal } = useCart();

    return (
        <div className="cart-page">
            {
                cartItems.length === 0 ? (
                    <p>
                        Your cart is empty
                    </p>
                ) : (
                    <>
                        <div className="cart-items">
                            {cartItems.map(item => (
                                <CartItemCard 
                                    item={item}
                                    key={item.productId}
                                />
                            ))}
                        </div>

                        <div className="cart-summary">

                            <h2>
                                Total: {getCartTotal().toFixed(2)} €
                            </h2>

                        </div>
                    </>
                )
            }
        </div>
    )
}