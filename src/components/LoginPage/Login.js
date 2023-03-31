import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

export function Login() {
    const [login, setLogin] = useState(true);

    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <div className="w-full bg-[#ece7d3] rounded-lg shadow-md p-6 md:my-10 md:w-[400px]">
                {login && <LoginForm />}
                {!login && <SignupForm />}
                <button
                    type="button"
                    onClick={() => setLogin(!login)}
                    className="w-full h-10 bg-[#fb9f1f] text-[#ece7d3] rounded-md border-2 border-[#ece7d3] hover:text-[#fb9f1f] hover:border-[#fb9f1f] hover:bg-[#ece7d3]"
                >
                    {login && <p>Registrati</p>}
                    {!login && <p>Login</p>}
                </button>
            </div>
        </div>
    );
}
