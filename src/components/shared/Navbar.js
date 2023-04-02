import { Link } from "react-router-dom";
import beerflix_logo from "../../assets/Beerflix Logo.png";

export function Navbar() {
    
    const scrollToHowto = () => {
        window.scrollTo({
            top: 800,
            behavior: "smooth"
        })
    }
    
    return (
        <nav className="h-20 w-full px-4 flex justify-between items-center bg-[#ece7d3] fixed z-20">
            <div className="flex gap-5 items-center">
                <Link to="/">
                    <img
                        className="w-24 h-12"
                        src={beerflix_logo}
                        alt="Beerflix logo"
                    />
                </Link>

                <div className="dropdown">
                    <a
                        className="dropdown-toggle text-[#180000] hover:text-[#fb9f1f] no-underline"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Scopri i prodotti
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a
                                className="text-[#180000] hover:text-[#fb9f1f] no-underline"
                                href="#"
                            >
                                Birre
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-[#180000] hover:text-[#fb9f1f] no-underline"
                                href="#"
                            >
                                Snack
                            </a>
                        </li>
                    </ul>
                </div>

                <button
                    className="text-[#180000] hover:text-[#fb9f1f] no-underline"
                    onClick={scrollToHowto}
                >
                    Come funziona
                </button>
                <a
                    href="#"
                    className="text-[#180000] hover:text-[#fb9f1f] no-underline"
                >
                    Aiuto
                </a>
            </div>

            {!localStorage.getItem("isLogged") && (
                <Link
                    to="/login"
                    className="flex w-24 h-10 bg-[#fb9f1f] text-[#ece7d3] no-underline justify-center items-center rounded-md border-2 border-[#ece7d3] hover:text-[#fb9f1f] hover:border-[#fb9f1f] hover:bg-[#ece7d3]"
                >
                    Accedi
                </Link>
            )}
            {localStorage.getItem("isLogged") && (
                <div>
                    <a
                        className="dropdown-toggle text-[#180000] hover:text-[#fb9f1f] no-underline"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {localStorage.getItem("isLogged")}
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a
                                className="text-[#180000] hover:text-[#fb9f1f] no-underline"
                                href="#"
                                onClick={() => {
                                    localStorage.removeItem("isLogged");
                                    window.location.reload();
                                }}
                            >
                                Esci
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
