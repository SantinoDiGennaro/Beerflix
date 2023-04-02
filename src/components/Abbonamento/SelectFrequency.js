import { useEffect, useState } from "react";

export function SelectFrequency() {
  const [selectedPeriod, setSelectedPeriod] = useState([]);

  const periods = [
    ["Settimanale", false],
    ["Mensile", false],
  ];

  useEffect(() => {
    setSelectedPeriod(periods);
  }, []);

  return (
    <div className="py-5 flex flex-row items-center justify-center border-2">
      <div className="text-lg font-semibold mr-3">Frequenza:</div>
      {selectedPeriod.map((el, index) => (
        <div
          key={index}
          className={`cursor-default w-[25%] py-2 border-2 border-black rounded-md text-center
          ${
            el[1] === true ? "bg-[#fb9f1f]" : "bg-white/80 hover:bg-[#dfc66ae1]"
          }`}
          onClick={() => {
            const newArray = [...selectedPeriod];
            newArray.map((el, i) =>
              index === i ? (el[1] = true) : (el[1] = false)
            );
            setSelectedPeriod(newArray);
          }}
        >
          {el}
        </div>
      ))}
    </div>
  );
}
