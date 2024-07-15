import {db} from "@/server/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { unstable_noStore as noStore } from "next/cache";

async function getData() {
  const data = await db.order.findMany({
    select: {
      amount: true,
      createdAt: true,
      status: true,
      id: true,
      User: {
        select: {
          firstName: true,
          email: true,
          profileImage: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function OrdersPage() {
  noStore();
  const data = await getData();
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Encomendas</CardTitle>
        <CardDescription>Ordens recentes</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Clientes</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Data</TableHead>
              <TableHead className="text-right">Quantidade</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <p className="font-medium">{item.User?.firstName}</p>
                  <p className="hidden md:flex text-sm text-muted-foreground">
                    {item.User?.email}
                  </p>
                </TableCell>
                <TableCell>Encomenda</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>
                  {new Intl.DateTimeFormat("pt-PT").format(item.createdAt)}
                </TableCell>
                <TableCell className="text-right">
                  €{new Intl.NumberFormat("pt-PT").format(item.amount / 100)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
