import { useState } from "react";

export function LoginForm() {
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);

    function login() {
        try {
            if (!localStorage.getItem(user)) {
                throw new Error("L'utente non esiste");
            } else {
                const data = JSON.parse(localStorage.getItem(user));
                if (password === data.password) {
                    alert("Login effettuato");
                } else {
                    throw new Error("Password errata");
                }
            }
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    return (
        <div>
            <h1 className="text-2xl font-medium mb-4 text-center">Login</h1>
            <form>
                <input
                    onChange={(e) => setUser(e.target.value)}
                    type="email"
                    className="w-full rounded p-2 mb-6"
                    placeholder="Email"
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="w-full  rounded p-2 mb-6"
                    placeholder="Password"
                />
                <div className="flex items-center justify-around">
                    <button
                        type="button"
                        onClick={login}
                        className="w-full h-10 bg-[#fb9f1f] text-[#ece7d3] rounded-md border-2 border-[#ece7d3] hover:text-[#fb9f1f] hover:border-[#fb9f1f] hover:bg-[#ece7d3]"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}
