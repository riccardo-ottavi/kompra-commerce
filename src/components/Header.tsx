import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import { fetchCategories } from "../api/product";

export default function Header() {

    const [categories, setCategories] = useState<string[]>([]);

    const [searchParams, setSearchParams] = useSearchParams();

    const selectedCategory = searchParams.get("category") ?? "all";

    useEffect(() => {

        async function loadCategories() {

            const data = await fetchCategories();

            setCategories(data);
        }

        loadCategories();

    }, []);

    function handleCategoryChange(
        event: React.ChangeEvent<HTMLSelectElement>
    ) {
        const category = event.target.value;

        if (category === "all") {
            setSearchParams({});
        } else {
            setSearchParams({ category });
        }
    }

    return (
        <header>
            <div className="logo-container">
                <span className="logo">Kompra</span>
            </div>
            <div className="category-select">
                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >

                    <option value="all">
                        ALL CATEGORIES
                    </option>

                    {categories.map(category => (

                        <option
                            key={category}
                            value={category}
                        >
                            {category.toUpperCase()}
                        </option>

                    ))}

                </select>
            </div>
        </header>
    )
}