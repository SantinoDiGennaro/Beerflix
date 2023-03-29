import { Link, useNavigate } from "react-router-dom";
import ErrorCheck from "../../assets/payment/error-player-multimedia-svgrepo-com.svg";
import { useEffect } from "react";

export function ErrorPayment() {
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
                    Si è verificato un errore con il pagamento!
                </h1>
                <h2 className="text-xl text-center">
                    Ci dispiace informarti che è avventuo un errore durante il
                    pagamento, riprova a effetuare l'ordine e se l'errore
                    persiste non esistare a contattarci.
                </h2>
                <img src={ErrorCheck} alt="payment done" className="w-40 m-4" />
                <h3>
                    Attendi, a breve verrai riportato alla home, se ciò non
                    dovesse accadere clicca <Link to="/">qui</Link>
                </h3>
            </div>
        </div>
    );
}
