import { FC } from "react";

interface ComponentInterface {
    loc:{label: string;
      value: number;
      valueLabel: string;}
  }
const LocationRevenueBar:FC<ComponentInterface> = ({loc}) => {
  return (
    <div className="flex flex-col gap-[1px] ">
      <div className="flex justify-between items-center">
        <div className="text-xs">{loc.label}</div>
        <div className="text-xs">{loc.valueLabel}</div>
      </div>
      
      <div className="relative h-0.5 bg-white/20 rounded-full">
        
        <div
          className="absolute h-0.5 bg-[#A8C5DA] rounded-full"
          style={{ width: `${loc.value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LocationRevenueBar;
