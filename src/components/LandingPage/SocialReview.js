import testImg from "../../assets/landing-page-image/rece1.jpg";
import friends_drinking from "../../assets/landing-page-image/friends_drinking.PNG";
import drinking_together from "../../assets/landing-page-image/drinking_together.PNG";
import gluten_alcohool from "../../assets/landing-page-image/gluten_alcohool.PNG";
export function SocialReview() {
  return (
    <div className="py-6 lg:px-40 border-b-4 border-[#fb9f1f]">
      <h1 className="text-lg lg:text-2xl font-bold text-center py-4">
        Attenzione, il vostro aperitivo non sarà più lo stesso, chiedilo a loro!
      </h1>
      <div
        name="cards-container"
        className=" flex flex-col justify-around items-center sm:max-lg:items-center gap-3 lg:flex-row lg:items-baseline lg:gap-0"
      >
        <div name="card" className="w-[200px]">
          <img
            src={drinking_together}
            className="w-[200px] h-[200px]"
            alt="test"
          />
          <h4 className="py-2 text-center">
            "Sperimentare gusti nuovi e divertirci con gli amici diventa ancora
            più facile grazie a @beerflixitalia 💛"{" "}
          </h4>
        </div>
        <div name="card" className="w-[200px]">
          <img src={testImg} className="w-[200px] h-[200px]" alt="test" />
          <h4 className="py-2 text-center">
            "Durante l’inverno restare a casa può diventare una necessità, e
            senza il nostro pub preferito dovevamo accontentarci di quello che
            offriva il supermercato. Finalmente ho scoperto le box di
            @beerflixitalia 🍻"{" "}
          </h4>
        </div>
        <div name="card" className="w-[200px]">
          <img
            src={friends_drinking}
            className="w-[200px] h-[200px]"
            alt="test"
          />
          <h4 className="py-2 text-center">
            "La box è riciclabile, e la maggior parte dei marchi sono di
            produzione italiana. L’impatto ambientale è pari a 0 🌱"{" "}
          </h4>
        </div>
        <div name="card" className="w-[200px]">
          <img
            src={gluten_alcohool}
            className="w-[200px] h-[200px]"
            alt="test"
          />
          <h4 className="py-2 text-center">
            "Mia marito è un grande amante della birra, ma io sono astemia e mia
            figlia è celiaca. Adesso non vediamo l'ora che arrivi la box per
            provare gusti nuovi e poter festeggiare tutti insieme. "
          </h4>
        </div>
      </div>
    </div>
  );
}
