import { useEffect, useState } from "react";

export function SelectPlan() {
  const [selectedPlan, setSelectedPlan] = useState([]);

  const plans = [
    ["Solo birre", false],
    ["Solo birre senza glutine", false],
  ];

  useEffect(() => {
    setSelectedPlan(plans);
  }, []);

  return (
    <div className="py-5 flex flex-col items-center border-2">
      {selectedPlan.map((el, index) => (
        <div
          key={index}
          className={`cursor-default w-[20%] py-2 border-2 border-black rounded-md text-center  ${
            el[1] === true ? "bg-[#fb9f1f]" : "bg-white/80 hover:bg-[#dfc66ae1]"
          }`}
          onClick={() => {
            const newArray = [...selectedPlan];
            newArray.map((el, i) =>
              index === i ? (el[1] = true) : (el[1] = false)
            );
            setSelectedPlan(newArray);
          }}
        >
          {el}
        </div>
      ))}
    </div>
  );
}
