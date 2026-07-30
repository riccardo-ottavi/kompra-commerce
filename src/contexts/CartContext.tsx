import { createContext, useContext, useState, type ReactNode } from "react";
import type { CartContextType, CartItem } from "../types/cart";
import type { Product } from "../types/product";

const CartContext = createContext<CartContextType | null>(null);

type CartProviderProps = {children: ReactNode};

export function CartProvider({children}: CartProviderProps) {

    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    function addToCart(product: Product, quantity: number = 1) {

        const existingItem = cartItems.find(item => item.productId === product.id);

        if (existingItem) {
            setCartItems(prev =>
                prev.map(item =>
                    item.productId === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + quantity
                        }
                        : item
                )
            );

            return;
        }

        const newItem: CartItem = {
            productId: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity
        };

        setCartItems(prev => [...prev, newItem]);
    }

    function removeFromCart(productId: number) {

        setCartItems(prev =>
            prev.filter(
                item => item.productId !== productId
            )
        );
    }

    function updateQuantity(productId: number, quantity: number) {

        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCartItems(prev => prev.map(item =>
                item.productId === productId
                    ? {
                        ...item,
                        quantity
                    }
                    : item
            )
        );
    }

    function clearCart() {
        setCartItems([]);
    }

    function getCartTotal() {
        return cartItems.reduce(
            (total, item) =>
                total + item.price * item.quantity,
            0
        );
    }

    function getCartCount() {
        return cartItems.reduce(
            (count, item) =>
                count + item.quantity,
            0
        );
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                getCartTotal,
                getCartCount
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {

    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart must be used inside CartProvider"
        );
    }

    return context;
}