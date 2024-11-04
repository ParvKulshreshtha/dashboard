import icon_fall from "@/assets/icon-fall.png";
import icon_rise from "@/assets/icon-rise.png";
import icon_dark_fall from "@/assets/icon-dark-fall.png";
import icon_dark_rise from "@/assets/icon-dark-rise.png";
import { FC } from "react";
import LocationRevenueBar from "@/LocationRevenueBar";
import { useSelector } from "react-redux";
import { ProjectionChart } from "./ProjectionChart";
import { RevenueChart } from "./RevenueChart";
import { TopSellinTable } from "./TopSellingTable";
import DoughnutChart from "./PieChart";
import Dot from "@/components/ui/Dot";
import Map from "./Map";


const ECommDash: FC= () => {

  const darkTheme = useSelector((state: any) => state.darkTheme);

    return (
        <div className="px-2 py-1">
            <div className="font-semibold">eCommerce</div>
            <div className="grid grid-cols-12 gap-4 mt-4 dark:bg-black">
                {/* First row */}
                <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-4">
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
                                    <img src={darkTheme?icon_dark_fall:icon_fall} alt="Fall icon" className="h-4 w-4 ml-1" />
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
                                    <img src={darkTheme?icon_dark_rise:icon_rise} alt="Rise icon" className="h-4 w-4 ml-1" />
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
                <div className="col-span-12 md:col-span-6 bg-primarylight dark:bg-white/5 rounded-[16px] p-6 gap-4">
                    <div className="font-semibold mb-4">Projections vs Actuals</div>
                    <div>
                        <ProjectionChart />
                    </div>
                </div>

                {/* Second row */}
                <div className="col-span-12 md:col-span-9 bg-primarylight dark:bg-white/5 rounded-[16px] p-6 flex flex-col gap-4">
                    <div className="font-semibold mt-0 mb-4">Revenue</div>
                    <RevenueChart />
                </div>
                <div className="col-span-12 md:col-span-3 bg-primarylight dark:bg-white/5 rounded-[16px] p-6 flex flex-col justify-center gap-4">
                    <div className="font-semibold">Revenue by Location</div>
                    <div className="map">
                        <Map  />
                    </div>
                    <div className="flex flex-col gap-4">
                        {[
                            { label: "New York", value: 72, valueLabel: "72K" },
                            { label: "San Fransisco", value: 39, valueLabel: "39K" },
                            { label: "Sydney", value: 21, valueLabel: "21K" },
                            { label: "Singapore", value: 61, valueLabel: "61K" },
                        ].map((loc, index) => (
                            <LocationRevenueBar key={index} loc={loc} />
                        ))}
                    </div>
                </div>

                {/* Third row */}
                <div className="col-span-12 md:col-span-9 bg-primarylight dark:bg-white/5 rounded-[16px] p-6 flex flex-col justify-center gap-4">
                    <div className="font-semibold">Top Selling Products</div>
                    <TopSellinTable />
                </div>
                <div className="col-span-12 md:col-span-3 bg-primarylight dark:bg-white/5 rounded-[16px] p-6 flex flex-col justify-center">
                    <div className="font-semibold">Total Sales</div>
                    <div>
                        <DoughnutChart data={[
                            { label: "Direct", value: 300.56 },
                            { label: "Affiliate", value: 135.56 },
                            { label: "Sponsored", value: 154.56 },
                            { label: "E-mail", value: 48.56 },
                        ]} />
                    </div>
                    <div className="flex flex-col gap-3">
                        {[
                            { label: "Direct", value: 300.56, color: "#1c1c1c", darkColor:"#C6C7F8" },
                            { label: "Affiliate", value: 135.56, color: "#95A4FC", darkColor:"#BAEDBD" },
                            { label: "Sponsored", value: 154.56, color: "#B1E3FF", darkColor:"#95A4FC" },
                            { label: "E-mail", value: 48.56, color: "#BAEDBD", darkColor:"#B1E3FF" },
                        ].map((mode, index) => (
                            <div key={index} className="flex justify-between px-0.5 py-[1px]">
                                <div className="flex items-center">
                                    <Dot color={darkTheme?mode.darkColor:mode.color} />
                                    <div>{mode.label}</div>
                                </div>
                                <div>{mode.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ECommDash;
