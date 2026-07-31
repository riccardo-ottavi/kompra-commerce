import WishlistItemCard from "../components/WishlistItemCard";
import { useWishlist } from "../contexts/WishlistContext";

export default function Wishlist() {
    const { wishlistItems } = useWishlist();

    return (
        <div className="wishlist-container">
            <h1>Wishlist</h1>

            <div className="wishlist-page">
                {wishlistItems.length === 0 ? (
                    <p>Your wishlist is empty</p>
                ) : (
                    <div className="wishlist-items">
                        {wishlistItems.map(item => (
                            <WishlistItemCard
                                key={item.productId}
                                item={item}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}