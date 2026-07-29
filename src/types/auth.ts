import type { User } from "./user";

export type LoginRequest = {
    username: string;
    password: string;
};

export type AuthResponse = {
    token: string;
};

export type AuthContextType = {
    user: User | null;
    token: string | null;

    login: (
        credentials: LoginRequest
    ) => Promise<void>;

    logout: () => void;

    isAuthenticated: boolean;
};
