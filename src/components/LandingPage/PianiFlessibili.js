import wowImg from '../../assets/landing-page-image/famiglia_bottiglie.png';

export function PianiFlessibili() {
    return (
        <div className="w-full h-[490px] border-t-4 border-[#fb9f1f] bg-local bg-cover bg-center bg-no-repeat " style={{backgroundImage: `url(${wowImg})`}} >
            <div className="pt-8 flex justify-center ">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl text-black ">Piani Flessibili</h1>
                    <h2 className="text-2xl text-black ">per ogni tua esigenza</h2>
                    <a href="#" role="button" className=" w-[180px] h-[50px] hover:w-[200px] hover:h-[60px] hover:pt-4 text-black/80 bg-[#fb9f1f] ease-in duration-150 hover:animate-none hover:text-black hover:font-bold hover:text-xl  hover:border-solid-[#ece7d3] no-underline text-center pt-2.5 mt-4 rounded-lg">SCOPRI DI PIÙ</a>
                </div>
            </div>
        </div>
    )
}