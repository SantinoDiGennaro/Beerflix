export function Footer(){
    return(
        <footer class="h-fit py-6 bg-black/80 flex flex-col justify-center items-center lg:flex-row lg:justify-around">
            <div name="su di noi" class="flex flex-col items-center">
                <h2 class="text-lg text-[#ece7d3]">Beerflix@email.com</h2>
                <p class="text-sm text-[#ece7d3]">©2023 Develhope FS8 - Group one</p>
                <p class="text-sm text-[#ece7d3]">P.IVA 0123456789 - N. iscrizione al Registro imprese PA-123456</p>
                <p class="text-sm text-[#ece7d3]">PEC beerflix@pec.com | SEDE Via Roma n. 174 - Palermo</p>
            </div>
            <div name="link sezioni esterne" class="grid grid-cols-3">
                <a href="#" class="text-[#fb9f1f] no-underline mx-5 my-2">Domande frequenti</a>
                <a href="#" class="text-[#fb9f1f] no-underline mx-5 my-2">Centro assistenza</a>
                <a href="#" class="text-[#fb9f1f] no-underline mx-5 my-2">Account</a>
                <a href="#" class="text-[#fb9f1f] no-underline mx-5 my-2">Privacy</a>
                <a href="#" class="text-[#fb9f1f] no-underline mx-5 my-2">Informazioni sulle aziende</a>
                <a href="#" class="text-[#fb9f1f] no-underline mx-5 my-2">Contattaci</a>
                <a href="#" class="text-[#fb9f1f] no-underline mx-5 my-2">Garanzia legale</a>
                <a href="#" class="text-[#fb9f1f] no-underline mx-5 my-2">Note legali</a>
            </div>
        </footer>
    )
}