import { Link } from "react-router-dom";
import wowImg from "../../assets/landing-page-image/famiglia_bottiglie.png";

export function PianiFlessibili() {
    return (
        <div
            className="bg-gradient-to-br from-[#ece7d3] to-[#180000] w-full h-[200px]  sm:h-[450px] md:h-[520px] lg:h-[580px]  border-t-4 border-[#fb9f1f]  relative "
            >
            <img src={wowImg} className="w-full h-full  absolute" />
            <div className="pt-6 flex justify-center ">
                <div className="flex flex-col items-center md:pt-6 lg:pt-7 z-0">
                    <h1 className="text-4xl text-[#ece7d3] font-bold">
                        Piani Flessibili
                    </h1>
                    <h2 className="text-2xl text-[#ece7d3] font-bold">
                        per ogni tua esigenza
                    </h2>
                    <Link
                        to="selection"
                        role="button"
                        className=" w-[180px] h-[50px] hover:w-[220px] hover:h-[60px] text-black/80 bg-[#fb9f1f] ease-in duration-150 hover:animate-none hover:text-black/80 sm:hover:text-[#ece7d3] hover:font-bold hover:text-xl hover:bg-transparent hover:border-solid-[#ece7d3]  no-underline mt-4 rounded-lg flex items-center justify-center"
                    >
                        SCOPRI DI PIÙ
                    </Link>
                </div>
            </div>
        </div>
    );
}
