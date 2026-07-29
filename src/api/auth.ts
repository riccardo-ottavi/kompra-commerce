const API_URL = import.meta.env.VITE_API_URL;
import type { AuthResponse, LoginRequest } from "../types/auth";

export async function login(
    credentials: LoginRequest
): Promise<AuthResponse> {

    const res = await fetch(
        `${API_URL}/auth/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }
    );

    if (!res.ok) {
        throw new Error("Invalid credentials");
    }

    return res.json();
}