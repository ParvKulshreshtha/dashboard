import { FC, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableRowHeader
} from "@/components/ui/table";
import { Contacts, statusMap } from "@/data";
import icon_calendar from "../assets/icon-calendar.png";
import icon_prev from "../assets/icon-prev.png";
import icon_next from "../assets/icon-next.png";
import icon_selected from "../assets/icon-selected.png";
import icon_not_selected from "../assets/icon-not-selected.png";
import Dot from "./ui/Dot";
import { orders } from "@/data/order";


interface ComponentInterface {
  darkTheme:boolean;
}


export const OrderTable:FC<ComponentInterface> = ({darkTheme}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedRows, setSelectedRows] = useState<{ [key: string]: boolean }>({});
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const ordersPerPage = 10;

  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const handlePageChange = (page: number): void => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleRowSelect = (orderId: string): void => {
    setSelectedRows((prevSelectedRows) => ({
      ...prevSelectedRows,
      [orderId]: !prevSelectedRows[orderId]
    }));
    setSelectAll(false)
  };

  const handleSelectAll = (): void => {
    setSelectAll(!selectAll);
    const newSelectedRows = orders.reduce((acc:{[key:string]:boolean}, order) => {
      acc[order.id] = !selectAll;
      return acc;
    }, {});
    setSelectedRows(newSelectedRows);
  };

  const paginatedOrders = orders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  return (
    <div>
      <Table className="text-xs">
        <TableHeader>
          <TableRowHeader className="text-black40 dark:text-white/40">
            <TableHead className="flex justify-center items-center px-1 py-3">
              <button onClick={handleSelectAll}>
                <img
                  src={selectAll ? icon_selected : icon_not_selected}
                  alt={selectAll ? "Selected All" : "Not Selected All"}
                  className="h-5 w-5"
                />
              </button>
            </TableHead>
            <TableHead className="px-3">Order ID</TableHead>
            <TableHead className="px-3">User</TableHead>
            <TableHead className="px-3">Project</TableHead>
            <TableHead className="px-3">Address</TableHead>
            <TableHead className="px-3">Date</TableHead>
            <TableHead className="px-3">Status</TableHead>
          </TableRowHeader>
        </TableHeader>
        <TableBody>
          {paginatedOrders.map((order) => {
            const user = Contacts?.find((u) => u.id === order.userId);
            const { avatar, name = "No User", address } = user || {};
            const isSelected = selectedRows[order.id] || false;
            return (
              <TableRow key={order.id}>
                <TableCell className="flex justify-center items-center px-1">
                  <button onClick={() => handleRowSelect(order.id)}>
                    <img
                      src={isSelected ? icon_selected : icon_not_selected}
                      alt={isSelected ? "Selected" : "Not Selected"}
                      className="h-5 w-5"
                    />
                  </button>
                </TableCell>
                <TableCell className="px-3">{order.id}</TableCell>
                <TableCell className="px-3">
                  <div className="py-2 flex items-center gap-2">
                    <img src={avatar} alt="" className="h-6 w-6" />
                    {name}
                  </div>
                </TableCell>
                <TableCell className="px-3">{order.project}</TableCell>
                <TableCell className="px-3">{address}</TableCell>
                <TableCell className="px-3">
                  <div className="py-2 flex items-center gap-2">
                    <img src={icon_calendar} alt="" className="h-4 w-4" />
                    {order.date}
                  </div>
                </TableCell>
                <TableCell className="px-2 py-[1px]">
                  <div
                    className="flex items-center"
                    style={{ color: darkTheme?statusMap[order.status].dark_color:statusMap[order.status].color }}
                  >
                    <Dot color={darkTheme?statusMap[order.status].dark_color:statusMap[order.status].color} />
                    {statusMap[order.status].name}
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="flex justify-end items-center mt-3 gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous Page"
          className="disabled:opacity-50"
        >
          <img src={icon_prev} alt="Previous" className="w-5 h-5 m-1" />
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
          <img src={icon_next} alt="Next" className="h-5 w-5 m-1" />
        </button>
      </div>
    </div>
  );
}
