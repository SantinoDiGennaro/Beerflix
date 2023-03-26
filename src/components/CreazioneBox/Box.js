import { useState } from "react";
import { useEffect } from "react";

export function Box() {
    const [beers, setBeers] = useState([]);
    const [selectedBeers, setSelectedBeers] = useState([]);

    const fetchBeers = async () => {
        const beers = await (await fetch("http://localhost:4500/data")).json();
        setBeers(beers);
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
        <div className="flex flex-col items-center">
            <div className="flex w-full place-content-between px-24 ">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={index}
                        className={`w-[15%] py-2 border-2 border-black rounded-md text-center ${
                            selectedBeers[index]
                                ? "bg-[#fb9f1f]  hover:bg-[#FF2400]"
                                : "bg-white/80"
                        }`}
                        onClick={() => {
                            const newArray = [...selectedBeers];
                            newArray.splice(index, 1);
                            setSelectedBeers(newArray);
                        }}
                    >
                        {selectedBeers[index] ? selectedBeers[index] : "vuoto"}
                    </div>
                ))}
            </div>

            <div
                name="choose-container"
                className="flex flex-wrap justify-center gap-5 py-5"
            >
                {/* Design 1 */}
                {beers.map((el) => {
                    return (
                        <div
                            onClick={() =>
                                setSelectedBeers([...selectedBeers, el.name])
                            }
                            className="flex flex-col items-center w-[400px] min-h-[350px] bg-white/80 border-4 border-[#fb9f1f] hover:bg-[#fb9f1f] hover:border-white"
                        >
                            <img
                                src={el.img}
                                alt="beer"
                                className="h-3/5 my-3"
                            />
                            <h2 className="text-center text-2xl font-bold">
                                {el.brand} {el.name}
                            </h2>

                            <span>
                                ABV: {el.volume}
                                <meter
                                    min="0.5"
                                    max="20"
                                    value={Number(el.volume.slice(0, -1))}
                                ></meter>{" "}
                            </span>
                            <p>{el.description}</p>
                            <p>{el.keywords.map((el) => `#${el} `)}</p>
                        </div>
                    );
                })}
                {/* Design 2
                {beers.map((el) => {
                    return (
                        <div
                            onClick={() =>
                                setSelectedBeers([...selectedBeers, el.name])
                            }
                            className="flex flex-col items-center w-[400px] min-h-[350px] bg-white/80 border-4 border-[#fb9f1f] hover:bg-[#fb9f1f] hover:border-white"
                        >
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    
                                </div>
                                <img
                                    src={el.img}
                                    alt="beer"
                                    className="h-3/5 w-1/2 my-3"
                                />
                            </div>

                            <h2 className="text-center text-2xl">{el.brand}</h2>
                            <h2 className="text-center text-2xl">{el.name}</h2>
                            <p>{el.description}</p>
                            <p>{el.keywords.map((el) => `#${el} `)}</p>
                        </div>
                    );
                })} */}
            </div>

            <button
                disabled
                onClick={() => checkout()}
                className="my-8 flex w-44 h-16 bg-[#fb9f1f] text-[#ece7d3] text-2xl no-underline justify-center items-center rounded-md border-2 border-[#ece7d3] hover:text-[#fb9f1f] hover:border-[#fb9f1f] hover:bg-[#ece7d3] disabled:bg-[#ece7d3] disabled:text-[#a9a9a9] disabled:border-[#a9a9a9] disabled:cursor-not-allowed disabled:opacity-50"
            >
                Procedi
            </button>
        </div>
    );
}
