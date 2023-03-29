import { Footer } from "../shared/Footer";
import { Navbar } from "../shared/Navbar";
import { WellDonePayment } from "./WellDonePayment";

export function SuccessfullPaymentPage() {
    return (
        <div className="min-h-screen h-full bg-[#ece7d3] font-sans flex flex-col justify-between">
            <Navbar />
            <WellDonePayment />
            <Footer />
        </div>
    );
}
