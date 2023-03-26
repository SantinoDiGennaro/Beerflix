import testImg from "../../assets/landing-page-image/rece1.jpg";

export function SocialReview() {
    return (
        <div className="py-6 px-40 border-b-4 border-[#fb9f1f]">
            <h1 className="text-2xl font-bold text-center py-4">
                Attenzione, il vostro aperitivo non sarà più lo stesso, chiedilo
                a loro!
            </h1>
            <div name="cards-container" className=" flex justify-around">
                <div name="card" className="w-[200px]">
                    <img
                        src={testImg}
                        className="w-[200px] h-[200px]"
                        alt="test"
                    />
                    <h4 className="py-2 text-center">
                        "Sperimentare gusti nuovi e divertirci con gli amici
                        diventa ancora più facile grazie a @beerflixitalia 💚"{" "}
                    </h4>
                </div>
                <div name="card" className="w-[200px]">
                    <img
                        src={testImg}
                        className="w-[200px] h-[200px]"
                        alt="test"
                    />
                    <h4 className="py-2 text-center">
                        "Durante l’inverno restare a casa può diventare una
                        necessità, ma ero stanco delle solite birre del
                        supermercato. Finalmente ho scoperto le box di
                        @beerflixitalia"{" "}
                    </h4>
                </div>
                <div name="card" className="w-[200px]">
                    <img
                        src={testImg}
                        className="w-[200px] h-[200px]"
                        alt="test"
                    />
                    <h4 className="py-2 text-center">
                        "La box è riciclabile, e la maggior parte dei marchi
                        sono di produzione italiana. L’impatto ambientale è pari
                        allo 0"{" "}
                    </h4>
                </div>
                <div name="card" className="w-[200px]">
                    <img
                        src={testImg}
                        className="w-[200px] h-[200px]"
                        alt="test"
                    />
                    <h4 className="py-2 text-center"></h4>
                </div>
            </div>
        </div>
    );
}
