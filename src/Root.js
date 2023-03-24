import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage } from "./components/LandingPage/LandingPage"
import { LoginPage } from "./components/LoginPage/LoginPage"
import { CreazioneBox } from "./components/CreazioneBox/CreazioneBox"

export function Root(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="creazione" element={<CreazioneBox />} />
            </Routes>
        </BrowserRouter>
    )
}