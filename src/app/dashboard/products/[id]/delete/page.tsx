import { SubmitButton } from "@/app/components/SubmitButtons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function DeleteRoute({ params }: { params: { id: string } }) {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Tem a certeza que quer apagar este produto?</CardTitle>
          <CardDescription>
            Esta ação é irreversível e não pode ser desfeita.
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex justify-between">
          <Button variant="secondary" asChild>
            <Link href="/dashboard/products">Cancelar</Link>
          </Button>
          <form action="">
            <input type="hidden" name="productId" value={params.id} />
            <SubmitButton variant="destructive" text="Apagar Produto" />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
