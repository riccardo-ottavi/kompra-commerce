import { createContext, useContext, useState, type ReactNode } from "react";
import type { WishlistItem, WishlistContextType } from "../types/wishlist"; 
import type { Product } from "../types/product";

const WishlistContext = createContext<WishlistContextType | null>(null);

type WishlistProviderProps = {
    children: ReactNode;
};

export function WishlistProvider({
    children
}: WishlistProviderProps) {

    const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

    function addToWishlist(product: Product) {

        const existingItem = wishlistItems.find(
            item => item.productId === product.id
        );

        if (existingItem) {
            return;
        }

        const newItem: WishlistItem = {
            productId: product.id,
            title: product.title,
            price: product.price,
            image: product.image
        };

        setWishlistItems(prev => [
            ...prev,
            newItem
        ]);
    }

    function removeFromWishlist(productId: number) {
        setWishlistItems(prev =>
            prev.filter(
                item => item.productId !== productId
            )
        );
    }

    function clearWishlist() {
        setWishlistItems([]);
    }

    function isInWishlist(productId: number) {
        return wishlistItems.some(
            item => item.productId === productId
        );
    }

    return (
        <WishlistContext.Provider
            value={{
                wishlistItems,
                addToWishlist,
                removeFromWishlist,
                clearWishlist,
                isInWishlist
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {

    const context = useContext(WishlistContext);

    if (!context) {
        throw new Error("useWishlist must be used inside WishlistProvider");}

    return context;
}