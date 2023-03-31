import { Footer } from "../shared/Footer";
import { Navbar } from "../shared/Navbar";
import { useEffect, useState } from "react";
import { SocialReview } from "./SocialReview";
import { HowTo } from "./HowTo";
import { Faq } from "./Faq";
import { Header } from "./Header";
import { PianiFlessibili } from "./PianiFlessibili";

import { useRef } from "react";

export function LandingPage() {
    const [slogan, setSlogan] = useState();
    useEffect(() => {
        const slogans = [
            "Per ogni birra c'è uno snack adatto, scegli il tuo con un click ed è fatto!",
            "Birre artigianali, snack di qualità, con noi la festa sarà realtà!",
            "La tua serata perfetta con un birretta e uno snack, è questo il nostro track!",
            "Birre e snack per ogni gusto, con noi la festa sarà sempre lustro!",
        ];
        const randomSlogan = slogans[parseInt(Math.random() * slogans.length)];
        setSlogan(randomSlogan);
    }, []);
    return (
        <div className="h-full bg-[#ece7d3] font-sans">
            <Navbar />
            <Header />
            <SocialReview />
            <HowTo />
            <Faq />
            <PianiFlessibili />
            <Footer />
        </div>
    );
}
