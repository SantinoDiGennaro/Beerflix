import { Link } from "react-router-dom";
import bellImg from "../../assets/landing-page-image/prima_landing.jpg";

export function Header() {
    return (
        <div
            className="w-full h-[435px] border-b-4 border-[#fb9f1f] bg-cover bg-right bg-local lg:bg-auto lg:bg-top lg:bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${bellImg})` }}
        >
            <div className="pt-28 pl-8">
                <div className="flex flex-col">
                    <h1 className="text-3xl lg:text-4xl text-[#ece7d3] font-bold ">
                        La più grande selezione <br></br>di birre artigianali
                        sul <br></br>web.
                    </h1>
                    <h2 className="text-2xl text-[#ece7d3] font-bold ">
                        Direttamente a casa tua.
                    </h2>
                    <Link
                        to="selection"
                        role="button"
                        className="animate-pulse w-[180px] h-[50px] text-[#180000] bg-[#ece7d3] ease-in-out duration-500 hover:animate-none hover:text-[#ece7d3] hover:font-bold hover:text-xl hover:bg-transparent hover:border-solid-[#ece7d3] no-underline flex justify-center items-center mt-4 rounded-lg"
                    >
                        SCOPRI DI PIÙ
                    </Link>
                </div>
            </div>
        </div>
    );
}
