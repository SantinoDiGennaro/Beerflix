export function Faq() {
    return (
        <div className=" lg:px-80 pb-4">
            <h1 className="text-2xl font-bold text-center py-4">
                Altre domande?
            </h1>
            <div className="accordion accordion-flush" id="accordionExample">
                <div className="accordion-item bg-[#ece7d3]">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Quali sono le opzioni di abbonamento disponibili?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>
                                Offriamo opzioni di abbonamento mensili e
                                settimanali per box di 3, 4, 5, 6, 7 o 8 birre.
                            </strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-[#ece7d3]">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Posso scegliere le birre da inserire nel mio box?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>
                                Sì, puoi scegliere le bottiglie di birra da
                                inserire in ogni singolo slot del tuo box.
                            </strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-[#ece7d3]">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Come posso modificare le mie preferenze di birra o
                            il mio abbonamento?
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>
                                Puoi modificare le tue preferenze di birra e il
                                tuo abbonamento accedendo al tuo account sul
                                nostro sito web.
                            </strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-[#ece7d3]">
                    <h2 className="accordion-header" id="headingFour">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                        >
                            Quando viene addebitata la mia carta di credito per
                            l'abbonamento?
                        </button>
                    </h2>
                    <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>
                                Addebitiamo la carta di credito degli abbonati
                                il giorno in cui viene spedito il loro box
                                mensile o settimanale.
                            </strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-[#ece7d3]">
                    <h2 className="accordion-header" id="headingFive">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                        >
                            Posso mettere in pausa o cancellare il mio
                            abbonamento?
                        </button>
                    </h2>
                    <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>
                                Sì, puoi mettere in pausa o cancellare il tuo
                                abbonamento in qualsiasi momento accedendo al
                                tuo account sul nostro sito web.
                            </strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-[#ece7d3]">
                    <h2 className="accordion-header" id="headingSix">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                        >
                            Quanto tempo ci vuole per ricevere il mio box di
                            birra?
                        </button>
                    </h2>
                    <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>
                                I box vengono spediti entro 3-5 giorni
                                lavorativi dalla data dell'ordine e dovrebbero
                                essere consegnati entro 7-10 giorni lavorativi
                                dalla data di spedizione.
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
