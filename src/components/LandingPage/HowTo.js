import { Link } from "react-router-dom";
import montagnettaBirre from "../../assets/landing-page-image/montagnetta_birre.png";
import immagineBox from "../../assets/landing-page-image/immagine_box.png";
import calendar from "../../assets/landing-page-image/calendar.png";
import johnnySins from "../../assets/landing-page-image/johnny_sins.PNG";
import testImg from "../../assets/landing-page-image/rece1.jpg";

export function HowTo() {
  return (
    <div className="flex flex-col items-center py-6 px-40 border-b-4 border-[#fb9f1f]">
      <h1 className="text-2xl font-bold text-center pt-4">Come funziona</h1>
      <h4 className="pb-4 text-center">
        Scegli il formato della box - scegli le tue birre preferite -
        direttamente a casa tua
      </h4>
      <div name="cards-container" className="w-full flex justify-around">
        <div name="card" className="w-[200px]">
          <img src={montagnettaBirre} className="w-[200px] h-[200px]" />
          <h2 className="pt-2 font-bold text-center">
            Birre per tutti i gusti
          </h2>
          <h4 className="pb-2 pt-2 text-center">
            Oltre 100 marchi, aggiornati ogni settimana, accuratamente
            selezionate dai nostri mastri birrai
          </h4>
        </div>
        <div name="card" className="w-[200px]">
          <img src={immagineBox} className="w-[200px] h-[200px]" />
          <h2 className="pt-2 font-bold text-center">
            Una box perfetta per te{" "}
          </h2>
          <h4 className="pb-2 pt-2 text-center">
            Personalizza la tua box e metti in pausa, riattiva o cancella il tuo
            abbonamento quando vuoi{" "}
          </h4>
        </div>
        <div name="card" className="w-[200px]">
          <img src={calendar} className="w-[200px] h-[200px]" />
          <h2 className="pt-2 font-bold text-center">
            Abbonamento mensile o settimanale
          </h2>
          <h4 className="pb-2 pt-2 text-center"></h4>
        </div>
        <div name="card" className="w-[200px]">
          <img src={johnnySins} className="w-[200px] h-[200px]" />
          <h2 className="pt-2 font-bold text-center">
            Direttamente a casa tua
          </h2>
          <h4 className="pb-2 pt-2 text-center"></h4>
        </div>
      </div>
      <div className="py-8">
        <Link
          to="login"
          className="flex h-10 w-[140px] bg-[#fb9f1f] text-[#ece7d3] no-underline justify-center items-center rounded-md border-2 border-[#ece7d3] hover:text-[#fb9f1f] hover:border-[#fb9f1f] hover:bg-[#ece7d3]"
        >
          SCOPRI DI PIÙ
        </Link>
      </div>
    </div>
  );
}
