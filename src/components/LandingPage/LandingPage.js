import { Footer } from "../shared/Footer";
import { Navbar } from "../shared/Navbar";
import BirraESnack from "../../assets/landing-page-image/BirraEsnack.png"
import Bicchieri from "../../assets/landing-page-image/BanconeBiccBottv3.png"
import image1 from "../../assets/landing-page-image/image 1.jpg"
import image2 from "../../assets/landing-page-image/image 2.jpg"
import image3 from "../../assets/landing-page-image/image 3.jpg"
import image4 from "../../assets/landing-page-image/rece1.jpg"
import step1 from "../../assets/landing-page-image/step-phase/step-1.png"
import step2 from "../../assets/landing-page-image/step-phase/step-2.jpg"
import step3 from "../../assets/landing-page-image/step-phase/step-3.jpg"
import step4 from "../../assets/landing-page-image/step-phase/step-4.jpg"
import { useEffect, useState } from "react";

export function LandingPage(){
        const [slogan, setSlogan] = useState()
        useEffect (()=>{
            const slogans = ["Per ogni birra c'è uno snack adatto, scegli il tuo con un click ed è fatto!","Birre artigianali, snack di qualità, con noi la festa sarà realtà!", "La tua serata perfetta con un birretta e uno snack, è questo il nostro track!", "Birre e snack per ogni gusto, con noi la festa sarà sempre lustro!"];
            const randomSlogan = slogans[parseInt(Math.random()*slogans.length)]
            setSlogan(randomSlogan)
        },[])

    return(
        <div className="h-full bg-gradient-to-b from-[#36060c] to-[#180000] font-sans">
            <Navbar/>

            <div class="h-[600px] flex justify-between items-center border-b-2 border-[#fb9f1f]">
                <img class="h-[200px] lg:h-[300px]" src={BirraESnack} alt="missing"/>
                <div class="h-full flex flex-col justify-center items-center">
                    <h1 class="text-[#fb9f1f] text-3xl">BEVI INSIEME A NOI</h1>
                    <h2 class="text-[#fb9f1f] text-lg w-80 text-center md:text-2xl md:w-96 lg:text-3xl lg:w-[650px]">{}</h2>
                    <a href="#" class="flex w-40 h-10 bg-none text-[#fb9f1f] no-underline justify-center items-center rounded-md border-2 border-[#fb9f1f] hover:text-[#36060c] hover:border-[#ece7d3] hover:bg-[#fb9f1f] ">ORDINA ORA!</a>
                </div>
                <img class="h-[200px] lg:h-[200px]" src={Bicchieri} alt="missing"/>
            </div>

            <div name="punti di forza" class="h-[250px] border-b-2 border-[#fb9f1f]">
            </div>

            <div name="cosa dicono di noi" class="h-[500px] px-2 border-b-2 border-[#fb9f1f] sm: text-center sm: flex-col flex justify-around items-center">
                <h2 class="text-[#ece7d3]">
                    Netflix e divano hanno un nuovo compagno.
                </h2>
                <h3 class="text-[#ece7d3]">
                    Chiedilo a loro!
                </h3>
                <div id="carouselExampleControls" class="carousel slide h-fit w-80" data-bs-ride="carousel">
                    
                    <div class="carousel-inner">
                        <div class="carousel-item active bg-white">
                            <img src={image1} class="w-80 h-80" alt="missing"/>
                            <p>"Rilassarci, sperimentare sapori nuovi e divertirci insieme diventa ancora più facile grazie a @beerflixitalia 💛"</p>
                        </div>
                        <div class="carousel-item">
                            <img src={image2} class="w-80 h-80" alt="missing"/>
                        </div>
                        <div class="carousel-item">
                            <img src={image3} class="w-80 h-80" alt="missing"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div name="come funziona" class="flex flex-col justify-center items-center h-fit border-b-2 border-[#fb9f1f]">
                <h2 class="text-[#ece7d3] text-3xl text-center my-5">Come funziona</h2>
                <div class="flex flex-col items-center mb-10 lg:grid lg:grid-cols-2 min-[1400px]:flex min-[1400px]:flex-row">
                    <div class="h-[450px] min-h-fit w-[300px] mx-4 my-10 bg-[#ece7d3] border-2 border-[#fb9f1f] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#fb9f1f]">
                        <div class="h-1/3 flex flex-col m-2.5">
                            <h3 class="text-2xl text-center mb-2 text-[#36060c]">Registrati</h3>
                            <p class="mt-4 text-[#36060c]">Bastano pochi minuti per registrasi e scoprire tutti i nostri abbonamenti e la nostra selezione di birre e snack.</p>
                        </div>
                        <img class="h-2/3 w-full " src={step1} alt="step_1_phase_missing"/>
                    </div>
                    <div class="h-[450px] min-h-fit w-[300px] mx-4 my-10 bg-[#ece7d3] border-2 border-[#fb9f1f] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#fb9f1f]">
                        <div class="h-1/3 flex flex-col m-2.5">
                            <h3 class="text-2xl text-center mb-2  text-[#36060c]">Scegli le tue birre</h3>
                            <p class="mt-4  text-[#36060c]">Avrai la possibilità di scegliere tra le birre che preferisci e accombagnarci i migliori snack.</p>
                        </div>
                        <img class="h-2/3 w-full" src={step2} alt="step_2_phase_missing"/>
                    </div>
                    <div class="h-[450px] min-h-fit w-[300px] mx-4 my-10 bg-[#ece7d3] border-2 border-[#fb9f1f] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#fb9f1f]">
                        <div class="h-1/3 flex flex-col m-2.5">
                            <h3 class="text-2xl text-center mb-2  text-[#36060c]">Seleziona l'abbonamento</h3>
                            <p class="mt-4  text-[#36060c]">Con noi potrai scegliere quante volte ricevere i box, per essere sicuro di non restare mai senza.</p>
                        </div>
                        <img class="h-2/3 w-full" src={step3} alt="step_3_phase_missing"/>
                    </div>
                    <div class="h-[450px] min-h-fit w-[300px] mx-4 my-10 bg-[#ece7d3] border-2 border-[#fb9f1f] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#fb9f1f]">
                        <div class="h-1/3 flex flex-col m-2.5">
                            <h3 class="text-2xl text-center mb-2  text-[#36060c]">Divertiti in compgnia</h3>
                            <p class="mt-4  text-[#36060c]">Non ti resta che goderti un fantastico aperitivo con gli amici!</p>
                        </div>
                        <img class="h-2/3 w-full" src={step4} alt="step_4_phase_missing"/>
                    </div>
                </div>
            </div>

            <div name="inizia subito" class="flex flex-col justify-center items-center h-[450px] border-b-2 border-[#fb9f1f] py-5">
                <h2 class="text-[#ece7d3] text-3xl text-center mb-5">Inizia Subito</h2>
                {/* <div class="w-full flex justify-between absolute bottom-[250px]">
                    <img class="h-[200px] lg:h-[300px]" src={BirraESnack} alt="missing beer"/>
                    <img class="h-[200px] lg:h-[300px]" src={Bicchieri} alt="missing beer"/>   
                </div> */}
                <div class=" flex flex-col justify-center items-center w-20">
                    <h4 class="text-[#fb9f1f] text-sm">Risparmia tempo e goditi ogni momento in compagnia con Beerflix!</h4>
                    <a href="#" class="flex w-fit px-2 h-10 bg-[#fb9f1f] text-[#ece7d3] no-underline justify-center items-center rounded-md border-2 border-[#ece7d3] hover:text-[#fb9f1f] hover:border-[#fb9f1f] hover:bg-[#ece7d3]">Ordina la tua prima box</a>
                </div>
            </div>

            <Footer/>
        </div>
    )
}