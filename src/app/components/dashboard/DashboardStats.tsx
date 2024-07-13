import {db} from "@/server/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EuroIcon, PartyPopper, ShoppingBag, User2 } from "lucide-react";

async function getData() {
  const [user, products, order] = await Promise.all([
    db.user.findMany({
      select: {
        id: true,
      },
    }),

    db.product.findMany({
      select: {
        id: true,
      },
    }),

    db.order.findMany({
      select: {
        amount: true,
      },
    }),
  ]);

  return {
    user,
    products,
    order,
  };
}

export async function DashboardStats() {
  const { products, user, order } = await getData();

  const totalAmount = order.reduce((accumalator, currentValue) => {
    return accumalator + currentValue.amount;
  }, 0);
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Lucro</CardTitle>
          <EuroIcon className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            €{new Intl.NumberFormat("de-DE").format(totalAmount / 100)}
          </p>
          <p className="text-xs text-muted-foreground">Base 100 Cobrados</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Vendas</CardTitle>
          <ShoppingBag className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">+{order.length}</p>
          <p className="text-xs text-muted-foreground">
            Total de Vendas realizadas
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Produtos</CardTitle>
          <PartyPopper className="h-4 w-4 text-indigo-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{products.length}</p>
          <p className="text-xs text-muted-foreground">
            Total de Produtos criados
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total de Usuários</CardTitle>
          <User2 className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{user.length}</p>
          <p className="text-xs text-muted-foreground">Total de Usuários cadastrados</p>
        </CardContent>
      </Card>
    </div>
  );
}
