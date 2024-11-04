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
import icon_dark_calendar from "../assets/icon-dark-calendar.png";
import icon_selected from "../assets/icon-selected.png";
import icon_not_selected from "../assets/icon-not-selected.png";
import icon_copy from "../assets/icon-copy.png";
import icon_dark_selected from "../assets/icon-dark-selected.png";
import icon_dark_not_selected from "../assets/icon-dark-not-selected.png";
import icon_dark_copy from "../assets/icon-dark-copy.png";
import Dot from "./ui/Dot";
import { orders } from "@/data/order";
import { useSelector } from "react-redux";

interface ComponentInterface {
  currentPage: number;
}

export const OrderTable: FC<ComponentInterface> = ({  currentPage }) => {
  const [selectedRows, setSelectedRows] = useState<{ [key: string]: boolean }>({});
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<string>("");

  const darkTheme = useSelector((state: any) => state.darkTheme);

  
  const ordersPerPage = 10;
  const paginatedOrders = orders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  const handleRowSelect = (orderId: string): void => {
    setSelectedRows((prevSelectedRows) => ({
      ...prevSelectedRows,
      [orderId]: !prevSelectedRows[orderId]
    }));
    setSelectAll(false);
  };

  const handleSelectAll = (): void => {
    setSelectAll(!selectAll);
    const newSelectedRows = orders.reduce((acc: { [key: string]: boolean }, order) => {
      acc[order.id] = !selectAll;
      return acc;
    }, {});
    setSelectedRows(newSelectedRows);
  };

  return (
    <div className="overflow-x-auto">
      <Table className="text-xs">
        <TableHeader>
          <TableRowHeader className="text-black40 dark:text-white/40">
            <TableHead className="flex justify-center items-center px-1 py-3">
              <button onClick={handleSelectAll}>
                <img
                  src={selectAll ? (darkTheme ? icon_dark_selected : icon_selected) : (darkTheme ? icon_dark_not_selected : icon_not_selected)}
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
              <TableRow
                key={order.id}
                className="hover:bg-primarylight dark:hover:bg-white/5 rowHover"
                onMouseEnter={() => setIsHovered(order.id)}
                onMouseLeave={() => setIsHovered(order.id)}
              >
                <TableCell className="flex justify-center items-center px-1">
                  <button onClick={() => handleRowSelect(order.id)}>
                    <img
                      src={isSelected ? (darkTheme ? icon_dark_selected : icon_selected) : (darkTheme ? icon_dark_not_selected : icon_not_selected)}
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
                <TableCell className="px-3 flex items-center">
                  <span>{address}</span>
                  <button className={`${isHovered === order.id ? "visible" : "invisible"}`}>
                    <img src={darkTheme ? icon_dark_copy : icon_copy} alt="Copy" className="h-5 w-5 m-1" />
                  </button>
                </TableCell>
                <TableCell className="px-3">
                  <div className="py-2 flex items-center gap-2">
                    <img src={darkTheme ? icon_dark_calendar : icon_calendar} alt="" className="h-4 w-4" />
                    {order.date}
                  </div>
                </TableCell>
                <TableCell className="px-2 py-[1px]">
                  <div
                    className="flex items-center"
                    style={{ color: darkTheme ? statusMap[order.status].dark_color : statusMap[order.status].color }}
                  >
                    <Dot color={darkTheme ? statusMap[order.status].dark_color : statusMap[order.status].color} />
                    {statusMap[order.status].name}
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
