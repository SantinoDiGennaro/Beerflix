import { BrowserRouter, Route, Routes } from "react-router-dom"
import {LoginPage} from "./components/LoginPage/LoginPage"

export function Root(){
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<LandingPage/>}/> */}
                <Route path="login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}