import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Theme } from "../types/theme";

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeProviderProps = {
    children: ReactNode;
};

export function ThemeProvider({
    children
}: ThemeProviderProps) {

    const [theme, setTheme] = useState<Theme>(() => {
        return (
            localStorage.getItem("theme") as Theme
        ) || "light";
    });

    useEffect(() => {

        document.documentElement.setAttribute("data-theme", theme);

        localStorage.setItem("theme", theme);

    }, [theme]);

    function toggleTheme() {
        setTheme(prev =>
            prev === "light"
                ? "dark"
                : "light"
        );
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}


export function useTheme() {

    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme must be used inside ThemeProvider"
        );
    }

    return context;
}