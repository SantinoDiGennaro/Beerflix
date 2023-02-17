import {useState} from "react"
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

export function Login (){
    const [data, setData] = useState()
    const [login, setLogin] = useState(true)

    // const signup = () => {
    //     const form = document.querySelector("#login-form");
    //     form.innerHTML = `
        // <div class="w-full bg-[#ece7d3] rounded-lg shadow-md p-6 md:w-[400px]">
        //     <h1 class="text-2xl font-medium mb-4 text-center">Registrati</h1>
        //     <form>
        //         <input onChange={e=>setData({...data, firstName: e.target.value})} id="firstName" type="text" class="w-full rounded p-2 mb-6" placeholder="Inserisci il tuo nome" required>
        //         <input onChange={e=>setData({...data, lastName: e.target.value})} id="lastName" type="text" class="w-full rounded p-2 mb-6" placeholder="Inserisci il tuo cognome"required>
        //         <label for="date" >Inserisci la tua data di nascità</label>
        //         <input onChange={e=>setData({...data, bday: e.target.value})} id="date" type="date" class="w-full rounded p-2 mb-6 " placeholder="Inserisci la tua data di nascità" required>
        //         <input onChange={e=>setData({...data, address: e.target.value})} type="text" class="w-full rounded p-2 mb-6" placeholder="Inserisci Il tuo indirizzo" required>
        //         <input onChange={e=>setData({...data, email: e.target.value})} id="email" type="email" class="w-full rounded p-2 mb-6" placeholder="Email" required>
        //         <input onChange={e=>setData({...data, password: e.target.value})} id="password" type="password" class="w-full  rounded p-2 mb-6" placeholder="Password" required>
        //         <input id="passConf" type="password" class="w-full  rounded p-2 mb-6" placeholder="Conferma Password" required>
        //     </form>
        //     <div class="flex items-center justify-around">
        //         <button id="login-r" class="w-24 h-10 bg-[#fb9f1f] text-[#ece7d3] rounded-md border-2 border-[#ece7d3] hover:text-[#fb9f1f] hover:border-[#fb9f1f] hover:bg-[#ece7d3]">Login</button>
        //         <button id="signup" class="w-24 h-10 bg-[#fb9f1f] text-[#ece7d3] rounded-md border-2 border-[#ece7d3] hover:text-[#fb9f1f] hover:border-[#fb9f1f] hover:bg-[#ece7d3]">Registrati</button>
        //     </div>
        // </div>`
    //     document.querySelector("#login-r").onclick = () => console.log(data)//loginR();

    //     const register = () =>{
    //         const firstName = document.querySelector("#firstName").value;
    //         const lastName = document.querySelector("#lastName").value;
    //         const date = document.querySelector("#date").value;
    //         const email = document.querySelector("#email").value.toLowerCase();
    //         const password = document.querySelector("#password").value;
    //         const passConf = document.querySelector("#passConf").value;

    //         if (localStorage.getItem(email)){
    //             alert("L'indirizzo mail è già registrato")
    //             throw new Error("L'indirizzo mail è già registrato")
    //         }

    //         if(password !== passConf){
    //             alert("Le password non coincidono")
    //             throw new Error("Le password non coincidono")
    //         } else {
    //             const user = {
    //                 firstName: firstName,
    //                 lastName: lastName,
    //                 birth: date,
    //                 email: email,
    //                 password:password
    //             }
                
    //             localStorage.setItem(email,password)
    //             console.log(user);
    //         }
    //     }
    //     document.querySelector("#signup").onclick=()=>register()
    // }

    // const loginR = () => {
    //     const form = document.querySelector("#login-form");
    //     form.innerHTML = `
    //     <div class="w-full bg-[#ece7d3] rounded-lg shadow-md p-6 md:w-[400px]">
    //     <h1 class="text-2xl font-medium mb-4 text-center">Login</h1>
    //     <form>
    //         <input id="email" type="email" class="w-full rounded p-2 mb-6" placeholder="Email"/>
    //         <input id="password" type="password" class="w-full  rounded p-2 mb-6" placeholder="Password"/>
    //         <div class="flex items-center justify-around">
    //             <button type="button" id="login" class="w-24 h-10 bg-[#fb9f1f] text-[#ece7d3] rounded-md border-2 border-[#ece7d3] hover:text-[#fb9f1f] hover:border-[#fb9f1f] hover:bg-[#ece7d3]">Login</button>
    //             <button type="button" id="signup" class="w-24 h-10 bg-[#fb9f1f] text-[#ece7d3] rounded-md border-2 border-[#ece7d3] hover:text-[#fb9f1f] hover:border-[#fb9f1f] hover:bg-[#ece7d3]">Registrati</button>
    //         </div>
    //     </form>
    // </div>`

    // function login(){
    //     const email = document.querySelector("#email").value.toLowerCase()
    //     const password = document.querySelector("#password").value
    //     console.log(localStorage.getItem(email))
    //     console.log (localStorage)

    //     try {
    //         if(!localStorage.getItem(email)){
    //             throw new Error("L'utente non esiste")
    //         } else {
    //             if (localStorage.getItem(email)!== password){
    //                 throw new Error("Password errata")
    //             } else {
    //                 alert ("Login effettuato")
    //             }
    //         }
    //     } catch (error) {
    //         alert(error)
    //     }
    // }

    // document.querySelector("#login").onclick = () => login(); 
    // document.querySelector("#signup").onclick = () => signup();
    // }




    return(
        <div class="flex flex-col justify-center items-center">
            <div class="w-full bg-[#ece7d3] rounded-lg shadow-md p-6 md:w-[400px]">
            {login && <LoginForm/>}
            {!login && <SignupForm/>}
            <button type="button" onClick={()=>setLogin(!login)} class="w-full h-10 bg-[#fb9f1f] text-[#ece7d3] rounded-md border-2 border-[#ece7d3] hover:text-[#fb9f1f] hover:border-[#fb9f1f] hover:bg-[#ece7d3]">{login && <p>Registrati</p>}{!login && <p>Login</p>}</button>
            </div>
        </div>
    )
}