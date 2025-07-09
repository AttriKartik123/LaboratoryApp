import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface ProductProps {
  test: string;
  price: string;
}

interface ProductItem {
  data: ProductProps[];
}

export default function PriceTable({ data }: ProductItem) {
  return (
   <div className="flex justify-center mt-10">
  <div className="w-full max-w-4xl px-4">
    <Table className="w-full border rounded-lg shadow">
      <TableHeader>
        <TableRow>
          <TableHead className="text-lg font-semibold">Test</TableHead>
          <TableHead className="text-lg font-semibold text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.test}</TableCell>
            <TableCell className="text-right">{item.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
</div>

  );
}
