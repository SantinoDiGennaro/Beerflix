import { Footer } from "../shared/Footer";
import { Navbar } from "../shared/Navbar";
import { Box } from "./Box";

export function CreazioneBox() {
    return (
    <div className="h-full bg-[#ece7d3] font-sans">
        <Navbar />
        <Box />
        <Footer />
    </div>
    )
}