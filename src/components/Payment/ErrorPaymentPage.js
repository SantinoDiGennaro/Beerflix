import { Footer } from "../shared/Footer";
import { Navbar } from "../shared/Navbar";
import { ErrorPayment } from "./ErrorPayment";

export function ErrorPaymentPage() {
    return (
        <div className="min-h-screen h-full bg-[#ece7d3] font-sans flex flex-col justify-between">
            <Navbar />
            <ErrorPayment />
            <Footer />
        </div>
    );
}
