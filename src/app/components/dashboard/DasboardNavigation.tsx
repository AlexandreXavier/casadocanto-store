"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Quadro",
    href: "/dashboard",
  },
  {
    name: "Encomendas",
    href: "/dashboard/orders",
  },
  {
    name: "Produtos",
    href: "/dashboard/products",
  },
  {
    name: "Banner",
    href: "/dashboard/banner",
  },
];

const DashboardNavigation= () => {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            link.href === pathname
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}

export default DashboardNavigation;
