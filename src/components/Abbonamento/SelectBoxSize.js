import { useEffect, useState } from "react";

export function SelectBoxSize() {
  const [selectedSize, setSelectedSize] = useState([]);

  const sizes = [
    ["4", false],
    ["5", false],
    ["6", false],
    ["7", false],
    ["8", false],
  ];

  useEffect(() => {
    setSelectedSize(sizes);
  }, []);

  return (
    <div className="py-5 flex flex-row items-center justify-center border-2">
      <div className="text-lg font-semibold mr-3">Birre per box:</div>
      {selectedSize.map((el, index) => (
        <div
          key={index}
          className={`cursor-default w-[25%] py-2 border-2 border-black rounded-md text-center
          ${
            el[1] === true ? "bg-[#fb9f1f]" : "bg-white/80 hover:bg-[#dfc66ae1]"
          }`}
          onClick={() => {
            const newArray = [...selectedSize];
            newArray.map((el, i) =>
              index === i ? (el[1] = true) : (el[1] = false)
            );
            setSelectedSize(newArray);
          }}
        >
          {el}
        </div>
      ))}
    </div>
  );
}
