import caImg from '../../assets/landing-page-image/BirraEsnack.png'

export function Box() {
    return (
        <div>
            <div className="flex place-content-between px-24 ">
                <div className="w-[15%] h-10 bg-white/80 border-2 border-black rounded-md text-center">Vuoto</div>
                <div className="w-[15%] h-10 bg-white/80 border-2 border-black rounded-md text-center">Vuoto</div>
                <div className="w-[15%] h-10 bg-white/80 border-2 border-black rounded-md text-center">Vuoto</div>
                <div className="w-[15%] h-10 bg-white/80 border-2 border-black rounded-md text-center">Vuoto</div>
                <div className="w-[15%] h-10 bg-white/80 border-2 border-black rounded-md text-center">Vuoto</div>
            </div>
            <div name="choise-container" className='pt-4 grid grid-cols-3 grid-rows-2'>
                <div className='w-[400px] h-[350px] bg-white/80 border-4 border-[#fb9f1f]'>
                    <img src={caImg} />
                    <h2 className='text-center text-2xl'>La mia Patong</h2>
                    <p>Colorata, speziata, acida. Un pò come me.</p>
                    <p>#IPA #Gluten-free</p>
                </div>
                <div className='w-[400px] h-[350px] bg-white/80 border-4 border-[#fb9f1f]'>
                    <img src={caImg} />
                    <h2 className='text-center text-2xl'>La mia Patong</h2>
                    <p>Colorata, speziata, acida. Un pò come me.</p>
                    <p>#IPA #Gluten-free</p>
                </div>
                <div className='w-[400px] h-[350px] bg-white/80 border-4 border-[#fb9f1f]'>
                    <img src={caImg} />
                    <h2 className='text-center text-2xl'>La mia Patong</h2>
                    <p>Colorata, speziata, acida. Un pò come me.</p>
                    <p>#IPA #Gluten-free</p>
                </div>
                <div className='w-[400px] h-[350px] bg-white/80 border-4 border-[#fb9f1f]'>
                    <img src={caImg} />
                    <h2 className='text-center text-2xl'>La mia Patong</h2>
                    <p>Colorata, speziata, acida. Un pò come me.</p>
                    <p>#IPA #Gluten-free</p>
                </div>
                <div className='w-[400px] h-[350px] bg-white/80 border-4 border-[#fb9f1f]'>
                    <img src={caImg} />
                    <h2 className='text-center text-2xl'>La mia Patong</h2>
                    <p>Colorata, speziata, acida. Un pò come me.</p>
                    <p>#IPA #Gluten-free</p>
                </div>
                <div className='w-[400px] h-[350px] bg-white/80 border-4 border-[#fb9f1f]'>
                    <img src={caImg} />
                    <h2 className='text-center text-2xl'>La mia Patong</h2>
                    <p>Colorata, speziata, acida. Un pò come me.</p>
                    <p>#IPA #Gluten-free</p>
                </div>
            </div>
            <a href="#" className="my-8  flex w-44 h-16 bg-[#fb9f1f] text-[#ece7d3] text-2xl no-underline justify-center items-center rounded-md border-2 border-[#ece7d3] hover:text-[#fb9f1f] hover:border-[#fb9f1f] hover:bg-[#ece7d3]">Procedi</a>
        </div>
    )
}