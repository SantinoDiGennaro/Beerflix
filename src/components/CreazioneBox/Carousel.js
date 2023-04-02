import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

export function Carousel() {
  const [beers, setBeers] = useState([]);
  const [selectedBeers, setSelectedBeers] = useState([]);

  const fetchBeers = async () => {
    const beers = await (await fetch("http://localhost:4500/data")).json();
    setBeers(beers);
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Slider className="h-1/2" {...settings}>
      {beers.map((el) => {
        return (
          <div
            onClick={() => {
              if (selectedBeers.length >= 5) {
                alert(
                  "Hai selezionato il numero massimo di birre, per favore rimuovine qualcuna o cambia il tuo piano."
                );
                return;
              }
              setSelectedBeers([...selectedBeers, el.name]);
            }}
            className="relative flex flex-col items-center h-[550px] bg-white/80 border-4 border-[#fb9f1f] hover:bg-[#fb9f1f] hover:border-white"
          >
            <img src={el.img} alt="beer" className="h-[15rem] my-3 pl-6" />
            <h2 className="text-center">{el.brand}</h2>
            <h2 className="text-center font-bold">{el.name}</h2>

            <span className="flex flex-col items-center text-xs">
              <span>ABV: {el.volume}</span>
              <meter
                className="w-2/4"
                min="0.5"
                max="20"
                value={Number(el.volume.slice(0, -1))}
              ></meter>{" "}
            </span>
            <div>
              <p className="text-sm">{el.description}</p>
              <p className="text-xs">{el.keywords.map((el) => `#${el} `)}</p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
