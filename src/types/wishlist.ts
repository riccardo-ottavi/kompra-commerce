import type { Product } from "./product";

export type WishlistItem = {
    productId: number;
    title: string;
    price: number;
    image: string;
    description: string;
};

export type WishlistContextType = {

    wishlistItems: WishlistItem[];

    addToWishlist: (product: Product) => void;

    removeFromWishlist: (productId: number) => void;

    isInWishlist: (productId: number) => boolean;

    clearWishlist: () => void;

};