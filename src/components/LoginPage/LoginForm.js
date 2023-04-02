import { useEffect, useState } from "react";

export function LoginForm() {
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const users = await (
                await fetch("http://localhost:4500/users")
            ).json();
            setUsersList(users);
        };
        fetchUser();
    }, []);

    function login() {
        const userObject = usersList.find((el) => el.email === user);

        try {
            if (!userObject) {
                throw new Error("L'utente non esiste");
            } else {
                if (password === userObject.password) {
                    localStorage.setItem("isLogged", `${user}`);
                    window.location.reload();
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
            <h1 class="text-2xl font-medium mb-4 text-center">Login</h1>
            <form>
                <input
                    onChange={(e) => setUser(e.target.value)}
                    type="email"
                    class="w-full rounded p-2 mb-6"
                    placeholder="Email"
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    class="w-full  rounded p-2 mb-6"
                    placeholder="Password"
                />
                <div class="flex items-center justify-around">
                    <button
                        type="button"
                        onClick={login}
                        class="w-full h-10 bg-[#fb9f1f] text-[#ece7d3] rounded-md border-2 border-[#ece7d3] hover:text-[#fb9f1f] hover:border-[#fb9f1f] hover:bg-[#ece7d3]"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}
