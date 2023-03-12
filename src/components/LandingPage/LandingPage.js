import { Footer } from "../shared/Footer";
import { Navbar } from "../shared/Navbar";
import BirraESnack from "../../assets/landing-page-image/BirraEsnack.png";
import Bicchieri from "../../assets/landing-page-image/BanconeBiccBottv3.png";
import image1 from "../../assets/landing-page-image/image 1.jpg";
import image2 from "../../assets/landing-page-image/image 2.jpg";
import image3 from "../../assets/landing-page-image/image 3.jpg";
import image4 from "../../assets/landing-page-image/rece1.jpg";
import step1 from "../../assets/landing-page-image/step-phase/step-1.png";
import step2 from "../../assets/landing-page-image/step-phase/step-2.jpg";
import step3 from "../../assets/landing-page-image/step-phase/step-3.jpg";
import step4 from "../../assets/landing-page-image/step-phase/step-4.jpg";
import { useEffect, useState } from "react";
import { SocialReview } from "./SocialReview";
import { HowTo } from "./HowTo";
import { Faq } from "./Faq";

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
      <SocialReview />
      <HowTo />
      <Faq />
      <Footer />
    </div>
  );
}
