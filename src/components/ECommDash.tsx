import icon_fall from "@/assets/icon-fall.png";
import icon_rise from "@/assets/icon-rise.png";
import { Component } from "./ProjectionChart";
import { RevenueChart } from "./RevenueChart";
import { FC } from "react";
import Map from "./Map";
interface ComponentInterface {
    darkTheme:boolean;
}

const ECommDash:FC<ComponentInterface> = ({darkTheme}) => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-7 p-4 dark:bg-black ">
        {/* First row */}
        <div className="col-span-6 grid grid-cols-2 items-center justify-center gap-7" >
          <div className="dark:text-black">
            <div className="bg-primaryblue flex flex-col p-6 gap-2 rounded-[16px]">
              <div className="font-semibold">Customers</div>
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">3,718</div>
                <div className="text-xs flex items-center">
                  <span>+11.10%</span>
                  <img src={icon_rise} alt="Rise icon" className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-primarylight dark:bg-white/5 flex flex-col p-6 gap-2 rounded-[16px]">
              <div className="font-semibold">Orders</div>
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">1,219</div>
                <div className="text-xs flex items-center">
                  <span>-0.03%</span>
                  <img src={icon_fall} alt="Fall icon" className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-primarylight dark:bg-white/5 flex flex-col p-6 gap-2 rounded-[16px]">
              <div className="font-semibold">Revenue</div>
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">$695</div>
                <div className="text-xs flex items-center">
                  <span>+15.03%</span>
                  <img src={icon_rise} alt="Rise icon" className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
          <div className="dark:text-black">
            <div className="bg-primarypurple flex flex-col p-6 gap-2 rounded-[16px]">
              <div className="font-semibold">Growth</div>
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold">30.1%</div>
                <div className="text-xs flex items-center">
                  <span>+6.08%</span>
                  <img src={icon_rise} alt="Rise icon" className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projections vs Actuals */}
        <div className="col-span-6 bg-primarylight dark:bg-white/5 rounded-[16px] h-full p-6 gap-4 flex flex-col justify-center">
          <div className="font-semibold">Projections vs Actuals</div>
          <div>
            <Component />
          </div>
        </div>

        {/* Second row */}
        <div className="col-span-9 bg-primarylight dark:bg-white/5 h-full gap-4 rounded-[16px] p-6 flex flex-col justify-center">
        <div className="font-semibold">Revenue</div>
          <RevenueChart darkTheme={darkTheme}/>
        </div>
        <div className="col-span-3 bg-primarylight dark:bg-white/5 h-full rounded-[16px] flex flex-col justify-center p-6 gap-4">
          <div>
            Revenue by Location
          </div>
          <div className="map ">
            <Map />
          </div>
        </div>

        {/* Third row */}
        <div className="col-span-9 bg-primarylight dark:bg-white/5 h-full gap-4 rounded-[16px] p-6 flex flex-col justify-center">
        <div className="font-semibold">Revenue</div>
          <RevenueChart darkTheme={darkTheme}/>
        </div>
        <div className="col-span-3 bg-gray-200 border border-gray-400 h-16 flex items-center justify-center">
          4
        </div>
      </div>
    </div>
  );
};

export default ECommDash;
