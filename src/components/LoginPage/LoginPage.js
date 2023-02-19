import { Footer } from "../shared/Footer";
import { Login } from "./Login";
import { Navbar } from "../shared/Navbar";

export function LoginPage(){
    return(
        <div className="min-h-screen h-full bg-gradient-to-b from-[#36060c] to-[#180000] flex flex-col justify-between">
            <Navbar/>
            <Login/>
            <Footer/>
        </div>
    )
}