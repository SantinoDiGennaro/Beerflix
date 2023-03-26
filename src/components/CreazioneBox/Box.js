import { useState } from "react";
import caImg from "../../assets/landing-page-image/BirraEsnack.png";
import { useEffect } from "react";

export function Box() {
    const [beers, setBeers] = useState([]);

    const fetchBeers = async () => {
        const beers = await (await fetch("http://localhost:4500/data")).json();
        setBeers(beers);
        console.log(beers);
    };

    useEffect(() => {
        fetchBeers();
    }, []);

    const checkout = () => {
        console.log("Checkout");
        fetch("http://localhost:4500/create-checkout-session", {
            method: `POST`,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: [
                    { id: 1, quantity: 1 },
                    { id: 2, quantity: 1 },
                ],
            }),
        })
            .then((res) => {
                if (res.ok) return res.json();
                return res.json().then((json) => Promise.reject(json));
            })
            .then(({ url }) => {
                window.location = url;
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div>
            <div className="flex place-content-between px-24 ">
                <div className="w-[15%] h-10 bg-white/80 border-2 border-black rounded-md text-center">
                    Vuoto
                </div>
                <div className="w-[15%] h-10 bg-white/80 border-2 border-black rounded-md text-center">
                    Vuoto
                </div>
                <div className="w-[15%] h-10 bg-white/80 border-2 border-black rounded-md text-center">
                    Vuoto
                </div>
                <div className="w-[15%] h-10 bg-white/80 border-2 border-black rounded-md text-center">
                    Vuoto
                </div>
                <div className="w-[15%] h-10 bg-white/80 border-2 border-black rounded-md text-center">
                    Vuoto
                </div>
            </div>
            <div
                name="choise-container"
                className="pt-4 grid grid-cols-3 grid-rows-2"
            >
                {beers.map((el) => {
                    return (
                        <div className="w-[400px] h-[350px] bg-white/80 border-4 border-[#fb9f1f]">
                            <img src={el.img} alt="beers photo" />
                            <h2 className="text-center text-2xl">{el.brand}</h2>
                            <h2 className="text-center text-2xl">{el.name}</h2>
                            <p>{el.description}</p>
                            <p>{el.keywords.map((el) => `#${el}`)}</p>
                        </div>
                    );
                })}
            </div>
            <button
                onClick={() => checkout()}
                className="my-8  flex w-44 h-16 bg-[#fb9f1f] text-[#ece7d3] text-2xl no-underline justify-center items-center rounded-md border-2 border-[#ece7d3] hover:text-[#fb9f1f] hover:border-[#fb9f1f] hover:bg-[#ece7d3]"
            >
                Procedi
            </button>
        </div>
    );
}
