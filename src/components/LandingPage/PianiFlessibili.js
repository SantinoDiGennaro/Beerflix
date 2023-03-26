import { Link } from "react-router-dom";
import wowImg from "../../assets/landing-page-image/famiglia_bottiglie.png";

export function PianiFlessibili() {
    return (
        <div
            className="bg-gradient-to-b from-[#ece7d3] to-[#180000]  w-full h-[560px] border-t-4 border-[#fb9f1f] bg-origin-border p-4  bg-cover bg-[center_bottom_0px] bg-no-repeat "
            style={{ backgroundImage: `url(${wowImg})` }}
        >
            <div className="pt-6 flex justify-center ">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl text-black font-bold">
                        Piani Flessibili
                    </h1>
                    <h2 className="text-2xl text-black font-bold">
                        per ogni tua esigenza
                    </h2>
                    <Link
                        to="selection"
                        role="button"
                        className=" w-[180px] h-[50px] hover:w-[200px] hover:h-[60px] hover:pt-4 text-black/80 bg-[#fb9f1f] ease-in duration-150 hover:animate-none hover:text-black hover:font-bold hover:text-xl  hover:border-solid-[#ece7d3] no-underline text-center pt-2.5 mt-4 rounded-lg"
                    >
                        SCOPRI DI PIÙ
                    </Link>
                </div>
            </div>
        </div>
    );
}
