import { Link, useNavigate } from "react-router-dom";
import DoneCheck from "../../assets/payment/checked-success-svgrepo-com.svg";
import { useEffect } from "react";

export function WellDonePayment() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 6000);
    }, []);
    return (
        <div className="h-full w-full flex justify-center ">
            <div className="h-4/5 w-4/5 rounded-lg bg-white border-2 border-[#fb9f1f] flex flex-col items-center p-8">
                <h1 className="font-bold text-3xl text-center">
                    Grazie per aver acquistato da noi!
                </h1>
                <h2 className="text-xl text-center">
                    Ti informiamo che il pagamento è avvenuto con successo,
                    riceverai a breve una mail di riepilogo dell'ordine
                    effettuato.
                </h2>
                <img src={DoneCheck} alt="payment done" className="w-40 m-4" />
                <h3>
                    Attendi, a breve verrai riportato alla home, se ciò non
                    dovesse accadere clicca <Link to="/">qui</Link>
                </h3>
            </div>
        </div>
    );
}
