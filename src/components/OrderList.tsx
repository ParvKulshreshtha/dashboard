import icon_plus from "../assets/icon-plus.png";
import icon_list from "../assets/icon-list.png";
import icon_sort from "../assets/icon-sort.png";
import icon_search from "../assets/icon-search.png";
import icon_prev from "../assets/icon-prev.png";
import icon_next from "../assets/icon-next.png";
import icon_dark_plus from "../assets/icon-dark-plus.png";
import icon_dark_list from "../assets/icon-dark-list.png";
import icon_dark_sort from "../assets/icon-dark-sort.png";
import icon_dark_search from "../assets/icon-dark-search.png";
import icon_dark_prev from "../assets/icon-dark-prev.png";
import icon_dark_next from "../assets/icon-dark-next.png";
import { FC, useState } from "react";
import { orders } from "@/data/order";
import { useSelector } from "react-redux";
import { OrderTable } from "./OrderTable";

const OrderList: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ordersPerPage = 10;
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const darkTheme = useSelector((state: any) => state.darkTheme);

  const handlePageChange = (page: number): void => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="px-2 py-1">
      <div className="font-semibold">Order List</div>
      <div className="mt-4">
        <div className="w-full bg-primarylight dark:bg-white/5 flex flex-col gap-4 rounded-sm p-2 justify-between">
          <div className="flex gap-2">
            <button>
              <img src={darkTheme ? icon_dark_plus : icon_plus} alt="Plus icon" className="h-7 w-7" />
            </button>
            <button>
              <img src={darkTheme ? icon_dark_list : icon_list} alt="List icon" className="h-7 w-7" />
            </button>
            <button>
              <img src={darkTheme ? icon_dark_sort : icon_sort} alt="Sort icon" className="h-7 w-7" />
            </button>
          </div>
          <div className="bg-[#FFFFFF66] dark:bg-black40 rounded-lg border-[1px] border-black10 dark:border-white/10 py-1 px-2 flex gap-2 items-center">
            <img src={darkTheme ? icon_dark_search : icon_search} alt="Search icon" className="h-4 w-4" />
            <input className="w-full md:w-32 placeholder:text-black20 dark:placeholder:text-white/20 dark:bg-black40" placeholder="Search" />
          </div>
        </div>
        <div className="mt-3">
          <OrderTable currentPage={currentPage} />
          <div className="flex justify-end items-center mt-3 gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous Page"
              className="disabled:opacity-50"
            >
              <img src={darkTheme ? icon_dark_prev : icon_prev} alt="Previous" className="w-5 h-5 m-1" />
            </button>
            <div className="flex justify-center items-center gap-2">
              {[...Array(totalPages).keys()].map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page + 1)}
                  className={`w-7 h-7 flex items-center justify-center ${
                    currentPage === page + 1 ? "bg-black05 dark:bg-white/10" : ""
                  } rounded-lg transition duration-150 ease-in-out`}
                >
                  {page + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next Page"
              className="disabled:opacity-50"
            >
              <img src={darkTheme ? icon_dark_next : icon_next} alt="Next" className="h-5 w-5 m-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
