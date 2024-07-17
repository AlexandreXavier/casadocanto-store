import Image from "next/image";
import Link from "next/link";
import all from "../../../../public/all.jpeg";
import casa from "../../../../public/casa.jpeg";
import yoga from "../../../../public/yoga.jpeg";

export function CategoriesSelection() {
  return (
    <div className="py-24 sm:py-32">
      

      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <div className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2">
          <Image
            src={all}
            alt="Todos os Produtos, Image"
            className="object-cover object-center "
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-10" />
          <div className="p-6 flex items-end">
            <Link href="/products/all">
              <h3 className="text-red-500 font-semibold">Todos os Produtos</h3>
              <p className="mt-1 text-sm text-red-500">Comprar Agora</p>
            </Link>
          </div>
        </div>

        <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
          <Image
            src={yoga}
            alt="Products for men Image"
            className="object-bottom object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0" />
          <div className="p-6 flex items-end sm:absolute sm:inset-0">
            <Link href="/products/yoga">
              <h3 className="text-white font-semibold">Aulas de Yoga</h3>
              <p className="mt-1 text-sm text-white">Comprar Agora</p>
            </Link>
          </div>
        </div>

        <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
          <Image
            src={casa}
            alt="Women product image"
            className="object-bottom object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0" />
          <div className="p-6 flex items-end sm:absolute sm:inset-0">
            <Link href="/products/casa">
              <h3 className="text-white font-semibold">Estadia na Casa</h3>
              <p className="mt-1 text-sm text-white">Comprar Agora</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
