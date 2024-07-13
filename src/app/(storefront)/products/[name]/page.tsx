import {db} from "@/server/db";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import { ProductCard } from "@/app/components/storefront/ProductCard";

async function getData(productCategory: string) {
  switch (productCategory) {
    case "all": {
      const data = await db.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
        where: {
          status: "published",
        },
      });

      return {
        title: "Todos os Produtos",
        data: data,
      };
    }
    case "casa": {
      const data = await db.product.findMany({
        where: {
          status: "published",
          category: "casa",
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: "Casa",
        data: data,
      };
    }
    case "yoga": {
      const data = await db.product.findMany({
        where: {
          status: "published",
          category: "yoga",
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: "Yoga",
        data: data,
      };
    }
    case "horta": {
      const data = await db.product.findMany({
        where: {
          status: "published",
          category: "horta",
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: "Horta",
        data: data,
      };
    }
    default: {
      return notFound();
    }
  }
}

export default async function CategoriesPage({
  params,
}: {
  params: { name: string };
}) {
  noStore();
  const { data, title } = await getData(params.name);
  return (
    <section>
      <h1 className="font-semibold text-3xl my-5">{title}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
