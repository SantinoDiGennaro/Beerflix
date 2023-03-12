import testImg from "../../assets/landing-page-image/rece1.jpg";

export function SocialReview() {
  return (
    <div className="py-6 px-40 border-b-4 border-[#fb9f1f]">
      <h1 className="text-2xl font-bold text-center py-4">
        Attenzione, il vostro aperitivo non sarà più lo stesso, chiedilo a loro!
      </h1>
      <div name="cards-container" className=" flex justify-around">
        <div name="card" className="w-[200px]">
          <img src={testImg} className="w-[200px] h-[200px]" />
          <h4 className="py-2 text-center">
            Lorem ipsum porco zio bio radonna la bologna del cammino del maiale
          </h4>
        </div>
        <div name="card" className="w-[200px]">
          <img src={testImg} className="w-[200px] h-[200px]" />
          <h4 className="py-2 text-center">
            Lorem ipsum porco zio bio radonna la bologna del cammino del maiale
          </h4>
        </div>
        <div name="card" className="w-[200px]">
          <img src={testImg} className="w-[200px] h-[200px]" />
          <h4 className="py-2 text-center">
            Lorem ipsum porco zio bio radonna la bologna del cammino del maiale
          </h4>
        </div>
        <div name="card" className="w-[200px]">
          <img src={testImg} className="w-[200px] h-[200px]" />
          <h4 className="py-2 text-center">
            Lorem ipsum porco zio bio radonna la bologna del cammino del maiale
          </h4>
        </div>
      </div>
    </div>
  );
}
