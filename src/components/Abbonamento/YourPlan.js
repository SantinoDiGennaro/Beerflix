import { useEffect } from "react";
import { SelectBoxSize } from "./SelectBoxSize";
import { SelectFrequency } from "./SelectFrequency";
import { SelectPlan } from "./SelectPlan";
import { PeriodsContext } from "./SubConfig";

export function YourPlan() {
  return (
    <div className="border-2 p-3">
      <div className="border-2 font-semibold text-2xl text-left">
        Il tuo piano
      </div>
      <div>{}</div>
    </div>
  );
}
