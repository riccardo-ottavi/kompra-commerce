import type { WishlistItem } from "../types/wishlist";
import { useWishlist } from "../contexts/WishlistContext";

type WishlistItemCardProps = {
    item: WishlistItem;
};

export default function WishlistItemCard({
    item
}: WishlistItemCardProps) {

    const { removeFromWishlist } = useWishlist();


    return (

        <div className="wishlist-item-card">

            <div className="wishlist-item-img">
                <img
                    src={item.image}
                    alt={item.title}
                />
            </div>


            <div className="wishlist-item-info">

                <h3>
                    {item.title}
                </h3>

                <p>{item.description}</p>

                <span>
                    {item.price.toFixed(2)} €
                </span>


                <button
                    className="wishlist-remove-btn"
                    onClick={() =>
                        removeFromWishlist(item.productId)
                    }
                >
                    Remove
                </button>

            </div>

        </div>

    );
}