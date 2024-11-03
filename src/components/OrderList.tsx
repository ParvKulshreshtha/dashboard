import icon_plus from "../assets/icon-plus.png"
import icon_list from "../assets/icon-list.png"
import icon_sort from "../assets/icon-sort.png"
import icon_search from "../assets/icon-search.png"
import { OrderTable } from "./OrderTable";
import { FC } from "react";

interface ComponentInterface {
    darkTheme:boolean;
}

const OrderList:FC<ComponentInterface> = ({darkTheme}) => {
    return (
        <div className="px-7">
            <div className="px-2 py-1 font-semibold">Order List</div>
            <div className="mt-4">
                <div className="w-full bg-primarylight dark:bg-white/5 flex gap-4 rounded-sm p-2 justify-between">
                <div className="flex gap-2">
                    <button>
                        <img src={icon_plus} alt="Plus icon" className="h-7 w-7" />
                    </button>
                    <button>
                        <img src={icon_list} alt="list icon" className="h-7 w-7" />
                    </button>
                    <button>
                        <img src={icon_sort} alt="sort icon" className="h-7 w-7" />
                    </button>
                </div>
                <div className="bg-[#FFFFFF66] dark:bg-black40 rounded-lg border-[1px] border-black10 dark:border-white/10 py-1 px-2 flex gap-2 items-center">
                    <img src={icon_search} alt="search icon" className="h-4 w-4" />
                    <input className="w-32 placeholder:text-black20 dark:placeholder:text-white/20 dark:bg-black40" placeholder="Search"/>
                </div>
                </div>
                <div className="mt-3">
                    <OrderTable darkTheme={darkTheme} />
                </div>
            </div>
        </div>
    );
};

export default OrderList;
