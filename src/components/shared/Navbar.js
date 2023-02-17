import beerflix_logo from "../../assets/Beerflix Logo.png"

export function Navbar(){
    return(
        <nav class="h-20 w-full px-4 flex justify-between items-center bg-[#ece7d3]">
                <div class="flex gap-5 items-center">
                    <img class="w-24 h-12" src={beerflix_logo} alt="Beerflix logo"/>

                    <div class="dropdown">
                        <a class="dropdown-toggle text-[#180000] hover:text-[#fb9f1f] no-underline" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Scopri i prodotti
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="text-[#180000] hover:text-[#fb9f1f] no-underline" href="#">Birre</a></li>
                            <li><a class="text-[#180000] hover:text-[#fb9f1f] no-underline" href="#">Snack</a></li>
                        </ul>
                    </div>

                    <a href="#" class="text-[#180000] hover:text-[#fb9f1f] no-underline">Come funziona</a>
                    <a href="#" class="text-[#180000] hover:text-[#fb9f1f] no-underline">Aiuto</a>
                </div>
                <a href="#" class="flex w-24 h-10 bg-[#fb9f1f] text-[#ece7d3] no-underline justify-center items-center rounded-md border-2 border-[#ece7d3] hover:text-[#fb9f1f] hover:border-[#fb9f1f] hover:bg-[#ece7d3]">Accedi</a>
            </nav>
    )
}