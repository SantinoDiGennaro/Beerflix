import { Footer } from "./components/shared/Footer";
import { Login } from "./components/LoginPage/Login";
import { Navbar } from "./components/shared/Navbar";

export function LoginPage(){
    return(
        <div class="h-screen bg-gradient-to-b from-[#36060c] to-[#180000] flex flex-col justify-between">
            <Navbar/>
            <Login/>
            <Footer/>
        </div>
    )
}