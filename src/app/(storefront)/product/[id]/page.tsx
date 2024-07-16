import {db} from "@/server/db";
import { addItem } from "@/app/actions";
import { ShoppingBagButton } from "@/app/components/SubmitButtons";
import { FeaturedProducts } from "@/app/components/storefront/FeaturedProducts";
import RoomReview from "@/app/components/storefront/RoomReview";
import { ImageSlider } from "@/app/components/storefront/ImageSlider";
import { StarIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import { MdOutlineCleaningServices } from 'react-icons/md';
import { LiaFireExtinguisherSolid } from 'react-icons/lia';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { FaShower } from "react-icons/fa6";


async function getData(productId: string) {
  const data = await db.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      price: true,
      images: true,
      description: true,
      category: true,
      name: true,
      id: true,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}


export default async function ProductIdRoute({
  params,
}: {
  params: { id: string };
}) {
  noStore();
  const data = await getData(params.id);
  const addProducttoShoppingCart = addItem.bind(null, data.id);
  const isRoom = data.category === 'casa';

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start lg:gap-x-24 py-6">
        <ImageSlider images={data.images} />
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {data.name}
          </h1>

          {isRoom ? (
            <p className="text-3xl mt-2 text-gray-900">
              €{data.price} - <span className="text-red-500">por dia</span>
            </p>
          ) : ( <p className="text-3xl mt-2 text-gray-900">
            €{data.price}
          </p>)}



          <div className="mt-11 flex items-center gap-1">
          </div>
          
          <div className='mb-11'>
                <h2 className='font-bold text-3xl mb-2'>Descrição</h2>
                <p>{data.description}</p>
          </div>
         
         {isRoom ? (
          <div className='mb-11'>
                    <h2 className='font-bold text-3xl mb-2'>Ofertas de Atendimento</h2>
                    <div className='grid grid-cols-2'>
                        <div className='flex items-center md:my-0 my-1'>
                        <FaShower />
                          <p className='text-xs md:text-base ml-2'>
                            Casa de banho privada
                          </p>
                        </div>
                    </div>
          </div>
         ) : (

          <div className='mb-11'>
                    <h2 className='font-bold text-3xl mb-2'>Higiene e Segurança</h2>
                    <div className='grid grid-cols-2'>
                      <div className='flex items-center my-1 md:my-0'>
                        <MdOutlineCleaningServices />
                        <p className='ml-2 md:text-base text-xs'>Limpeza Diária</p>
                      </div>
                      <div className='flex items-center my-1 md:my-0'>
                        <LiaFireExtinguisherSolid />
                        <p className='ml-2 md:text-base text-xs'>
                          Extintor de Fogo
                        </p>
                      </div>
                      <div className='flex items-center my-1 md:my-0'>
                        <AiOutlineMedicineBox />
                        <p className='ml-2 md:text-base text-xs'>
                          Disinfecções e Sterilizações
                        </p>
                      </div>
                    </div>
          </div>
         )}

        <div className='shadow dark:shadow-white rounded-lg p-6'>
                <div className='items-center mb-4'>
                  <p className='md:text-lg font-semibold'>Revisão do Cliente</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <RoomReview roomId={data.id} />
                </div>
        </div>
         
          <form action={addProducttoShoppingCart}>
            <ShoppingBagButton />
          </form>
        </div>
      </div>

    </>
  );
}
