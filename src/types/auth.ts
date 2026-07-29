export type LoginRequest = {
    username: string;
    password: string;
};

export type AuthResponse = {
    token: string;
};

export type AuthContextType = {
    token: string | null;

    login: (
        credentials: LoginRequest
    ) => Promise<void>;

    logout: () => void;

    isAuthenticated: boolean;
};
