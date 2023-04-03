import { Link } from "react-router-dom";
import beerflix_logo from "../../assets/Beerflix Logo.png";
import { useState } from "react";

export function Navbar() {
    const [burgerMenu, setBurgerMenu] = useState(false);
    const scrollToHowto = () => {
        window.scrollTo({
            top: 800,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <nav className="min-h-[80px] h-fit w-full px-4 flex justify-between items-center bg-[#ece7d3] fixed z-20 lg:hidden">
                <div
                    onClick={() => setBurgerMenu(!burgerMenu)}
                    className="flex flex-col"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-10 h-10"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </div>

                <div className="hidden lg:flex gap-5 items-center ">
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
                        className="hidden lg:flex w-24 h-10 bg-[#fb9f1f] text-[#ece7d3] no-underline justify-center items-center rounded-md border-2 border-[#ece7d3] hover:text-[#fb9f1f] hover:border-[#fb9f1f] hover:bg-[#ece7d3]"
                    >
                        Accedi
                    </Link>
                )}
                {localStorage.getItem("isLogged") && (
                    <div>
                        <a
                            className="hidden lg:flex dropdown-toggle text-[#180000] hover:text-[#fb9f1f] no-underline"
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
            <div
                className={`${
                    burgerMenu ? "hidden" : "flex"
                } flex-col h-fit gap-5 items-center pt-20 pb-4`}
            >
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
        </div>
    );
}
