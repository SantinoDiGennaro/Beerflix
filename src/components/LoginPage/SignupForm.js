import { useState } from "react"

export function SignupForm (){
    const [data, setData] = useState()

    function register(){
        try {
            if(localStorage.getItem(data.email)) throw new Error("Utente già registrato")
            if(data.password===data.passConf){
                localStorage.setItem([data.email], JSON.stringify(data))
            } else {
                throw new Error("Le password non combaciano")
            }
        } catch (error) {
            console.error(error)
            alert(error)
        }
    }

    return(
            <div>
                <h1 className="text-2xl font-medium mb-4 text-center">Registrati</h1>
                <form>
                    <input onChange={e=>setData({...data, firstName: e.target.value})} type="text" className="w-full rounded p-2 mb-6" placeholder="Inserisci il tuo nome" required/>
                    <input onChange={e=>setData({...data, lastName: e.target.value})} type="text" className="w-full rounded p-2 mb-6" placeholder="Inserisci il tuo cognome"required/>
                    <label for="date" >Inserisci la tua data di nascità</label>
                    <input onChange={e=>setData({...data, bday: e.target.value})} type="date" className="w-full rounded p-2 mb-6 " placeholder="Inserisci la tua data di nascità" required/>
                    <input onChange={e=>setData({...data, address: e.target.value})} type="text" className="w-full rounded p-2 mb-6" placeholder="Inserisci Il tuo indirizzo" required/>
                    <input onChange={e=>setData({...data, email: e.target.value.toLowerCase()})} type="email" className="w-full rounded p-2 mb-6" placeholder="Email" required/>
                    <input onChange={e=>setData({...data, password: e.target.value})} type="password" className="w-full  rounded p-2 mb-6" placeholder="Password" required/>
                    <input onChange={e=>setData({...data, passConf: e.target.value})} type="password" className="w-full  rounded p-2 mb-6" placeholder="Conferma Password" required/>
                </form>
                <div className="flex items-center justify-around">
                    <button onClick={register} id="signup" className="w-full h-10 bg-[#fb9f1f] text-[#ece7d3] rounded-md border-2 border-[#ece7d3] hover:text-[#fb9f1f] hover:border-[#fb9f1f] hover:bg-[#ece7d3]">Registrati</button>
                </div>
            </div>
    )
}