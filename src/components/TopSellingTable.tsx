import { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableRowHeader
} from "@/components/ui/table";
import { products } from "@/data";



// interface ComponentInterface {
//   darkTheme:boolean;
// }


export const TopSellinTable:FC = () => {
  return (
    <div className="h-full">
      <Table className="text-xs ">
        <TableHeader>
          <TableRowHeader className="text-black40 dark:text-white/40">
            <TableHead className="px-3">Name</TableHead>
            <TableHead className="px-3">Price</TableHead>
            <TableHead className="px-3">Quantity</TableHead>
            <TableHead className="px-3">Amount</TableHead>
          </TableRowHeader>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            return (
              <TableRow key={product.id}>
                
                <TableCell className="px-3">{product.product}</TableCell>
                
                <TableCell className="px-3">${product.amount}</TableCell>
                <TableCell className="px-3">{product.quantity}</TableCell>
                <TableCell className="px-3">${(product.quantity*product.amount).toFixed(2)}</TableCell>
                
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      
    </div>
  );
}
