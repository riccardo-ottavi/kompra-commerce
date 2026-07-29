type RatingProps = {
    rate: number;
    count: number;
};

export default function Rating({
    rate,
    count,
}: RatingProps) {

    const filledStars = Math.round(rate);

    return (
        <div className="rating"> 
            <div className="rating-stars">
                {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>
                        {i < filledStars ? "★" : "☆"}
                    </span>
                ))}         
            </div>
            <span className="rating-value">
                {rate.toFixed(1)} ({count})
            </span>
        </div>
    );
}