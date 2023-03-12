import testImg from "../../assets/landing-page-image/rece1.jpg";

export function HowTo() {
  return (
    <div className="py-6 px-40 border-b-4 border-[#fb9f1f]">
      <h1 className="text-2xl font-bold text-center pt-4">Come funziona</h1>
      <h4 className="pb-4 text-center">
        Scegli il formato della box - scegli le tue birre preferite -
        direttamente a casa tua
      </h4>
      <div name="cards-container" className=" flex justify-around">
        <div name="card" className="w-[200px]">
          <img src={testImg} className="w-[200px] h-[200px]" />
          <h2 className="pt-2 font-bold text-center">
            Birre per tutti i gusti
          </h2>
          <h4 className="pb-2 text-center">
            Lorem ipsum porco zio bio radonna la bologna del cammino del maiale
          </h4>
        </div>
        <div name="card" className="w-[200px]">
          <img src={testImg} className="w-[200px] h-[200px]" />
          <h2 className="pt-2 font-bold text-center">
            Birre per tutti i gusti
          </h2>
          <h4 className="pb-2 text-center">
            Lorem ipsum porco zio bio radonna la bologna del cammino del maiale
          </h4>
        </div>
        <div name="card" className="w-[200px]">
          <img src={testImg} className="w-[200px] h-[200px]" />
          <h2 className="pt-2 font-bold text-center">
            Birre per tutti i gusti
          </h2>
          <h4 className="pb-2 text-center">
            Lorem ipsum porco zio bio radonna la bologna del cammino del maiale
          </h4>
        </div>
        <div name="card" className="w-[200px]">
          <img src={testImg} className="w-[200px] h-[200px]" />
          <h2 className="pt-2 font-bold text-center">
            Birre per tutti i gusti
          </h2>
          <h4 className="pb-2 text-center">
            Lorem ipsum porco zio bio radonna la bologna del cammino del maiale
          </h4>
        </div>
      </div>
    </div>
  );
}
