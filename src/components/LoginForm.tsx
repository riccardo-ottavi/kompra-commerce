import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";


export default function LoginForm() {

    const { login } = useAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {

        event.preventDefault();

        try {
            await login({username, password});

        } catch (error) {
            console.error("Login failed", error);
        }
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <button className="auth-btn" type="submit">
                Login
            </button>

        </form>
    );
}