export function Footer() {
    return (
        <footer className="h-fit py-6 bg-black/80 flex flex-col justify-center items-center lg:flex-row lg:justify-around">
            <div name="su di noi" className="flex flex-col items-center">
                <h2 className="text-lg text-[#ece7d3]">Beerflix@email.com</h2>
                <p className="text-sm text-[#ece7d3] text-center">
                    ©2023 Develhope FS8 - Group one
                </p>
                <p className="text-sm text-[#ece7d3] text-center">
                    P.IVA 0123456789 - N. iscrizione al Registro imprese
                    PA-123456
                </p>
                <p className="text-sm text-[#ece7d3] text-center">
                    PEC beerflix@pec.com | SEDE Via Roma n. 174 - Palermo
                </p>
            </div>
            <div name="link sezioni esterne" className="grid grid-cols-3">
                <a href="#" className="text-[#fb9f1f] no-underline mx-5 my-2">
                    Domande frequenti
                </a>
                <a href="#" className="text-[#fb9f1f] no-underline mx-5 my-2">
                    Centro assistenza
                </a>
                <a href="#" className="text-[#fb9f1f] no-underline mx-5 my-2">
                    Account
                </a>
                <a href="#" className="text-[#fb9f1f] no-underline mx-5 my-2">
                    Privacy
                </a>
                <a href="#" className="text-[#fb9f1f] no-underline mx-5 my-2">
                    Informazioni sulle aziende
                </a>
                <a href="#" className="text-[#fb9f1f] no-underline mx-5 my-2">
                    Contattaci
                </a>
                <a href="#" className="text-[#fb9f1f] no-underline mx-5 my-2">
                    Garanzia legale
                </a>
                <a href="#" className="text-[#fb9f1f] no-underline mx-5 my-2">
                    Note legali
                </a>
            </div>
        </footer>
    );
}
