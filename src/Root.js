import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { CreazioneBox } from "./components/CreazioneBox/CreazioneBox";
import { SuccessfullPaymentPage } from "./components/Payment/SuccessfullPaymentPage";
import { ErrorPaymentPage } from "./components/Payment/ErrorPaymentPage";

export function Root() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="selection" element={<CreazioneBox />} />
                <Route
                    path="payment-success"
                    element={<SuccessfullPaymentPage />}
                />
                <Route path="payment-error" element={<ErrorPaymentPage />} />
            </Routes>
        </BrowserRouter>
    );
}
