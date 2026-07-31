import type { Product } from "./product";

export type CartItem = {
    productId: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
};

export type CartContextType = {
    
    cartItems: CartItem[];

    addToCart: (product: Product, quantity?: number) => void;

    removeFromCart: (productId: number) => void;

    updateQuantity: (productId: number, quantity: number) => void;

    clearCart: () => void;

    getCartTotal: () => number;

    getCartCount: () => number;
};