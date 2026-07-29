import { createContext, useContext, useState, type ReactNode } from "react";
import type { LoginRequest, AuthResponse, AuthContextType } from "../types/auth";
import { login as loginApi } from "../api/auth";

const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
    children: ReactNode;
};

export function AuthProvider({
    children
}: AuthProviderProps) {

    const [token, setToken] = useState<string | null>(
        localStorage.getItem("token")
    );

    async function login(
        credentials: LoginRequest
    ) {

        const data: AuthResponse = await loginApi(credentials);

        localStorage.setItem("token",data.token);

        setToken(data.token);
    }

    function logout() {

        localStorage.removeItem("token");

        setToken(null);
    }

    return (
        <AuthContext.Provider
            value={{
                token,
                login,
                logout,
                isAuthenticated: !!token
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }
    return context;
}