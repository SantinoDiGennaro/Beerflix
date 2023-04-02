import { Footer } from "../shared/Footer";
import { Navbar } from "../shared/Navbar";
import { SelectBoxSize } from "./SelectBoxSize";
import { SelectFrequency } from "./SelectFrequency";
import { SelectPlan } from "./SelectPlan";
import { YourPlan } from "./YourPlan";

export function SubConfig() {
  return (
    <div className="bg-[#ece7d3]">
      <Navbar />
      <div name="spacing" className="flex flex-col p-10 ">
        <div className="flex flex-col  mt-20 text-center bg-[#ffffff]">
          <div name="title" className="text-2xl p-2">
            Personalizza il tuo piano
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col border-2 w-[50%] bg-[#ffffff] p-5">
              <div className="border-2  font-semibold">
                1. Scegli il tipo di piano
              </div>
              <div className="border-2">
                Personalizza la tua box e metti in pausa, riattiva o cancella il
                tuo abbonamento quando vuoi
              </div>
              <SelectPlan />
            </div>
            <div className="border-2 grow bg-[#ffffff]">
              <div className="flex flex-col border-2  grow bg-[#ffffff] p-5">
                <div className="border-2 font-semibold">
                  2. Seleziona le tue preferenze
                </div>

                <SelectFrequency />

                <SelectBoxSize />

                <YourPlan />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
