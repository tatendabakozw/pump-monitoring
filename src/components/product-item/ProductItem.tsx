import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactElement, useContext } from "react";

interface Props {
  picture?: string;
  rating?: number;
  description: string;
  name: string;
  discount_price?: number;
  price?: number;
  id: string;
  category: string;
  countInStock: number;
  product?: any;
  averageRating?: any;
}

function ProductItem({
  picture,
  rating,
  name,
  description,
  price,
  discount_price,
  id,
  category,
  product,
  averageRating,
}: Props): ReactElement {
  const history = useRouter();
  const { pathname } = useRouter();

  const add_to_cart = async () => {};

  return (
    <div className="relative flex max-h-96 w-full flex-1 transform cursor-pointer flex-col overflow-hidden rounded border border-gray-100 bg-white transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none  motion-reduce:transition-none">
      <div
        onClick={() => history.push(`/product/description/${id}`)}
        className="relative flex h-32 flex-col items-center overflow-hidden rounded bg-zinc-100 md:h-52"
      >
        {/* <Image objectFit='cover' src={picture ? picture : ''} layout="fill" alt="product" className="flex-1 max-h-full flex-shrink-0 object-cover w-auto h-full rounded" /> */}
      </div>
      <div className="px-2">
        <div
          onClick={() => history.push(`/product/description/${id}`)}
          className="star mt-1 flex flex-row items-center md:mt-2"
        >
          {pathname === "/" ? null : (
            <div className="star-rating flex flex-row gap-1 ">
              {[...Array(Math.floor(averageRating ? averageRating : 0))].map(
                (star, index) => (
                  <span key={index} className="star">
                    <StarIcon
                      className="text-yellow-400"
                      height={16}
                      width={16}
                    />
                  </span>
                )
              )}
            </div>
          )}
        </div>
        <div
          onClick={() => history.push(`/product/description/${id}`)}
          className="flex-1 overflow-hidden"
        >
          <p className="text-sm text-gray-500 ">{name}</p>
          <p className="my-1 text-sm font-semibold text-gray-700">{category}</p>
        </div>

        <div className="mb-12"></div>
        {/* //price */}
        <div className="absolute bottom-0 w-full pb-2">
          {/* <p className='text-gray-500 text-sm'>Price:</p> */}
          <div className="flex flex-row items-center justify-between">
            {discount_price ? (
              <div
                onClick={() => history.push(`/product/description/${id}`)}
                className="flex flex-row items-center"
              >
                <p className="mr-2 font-bold text-gray-900">
                  ${price ? price : 0 - discount_price}
                </p>
                <p className="text-sm text-gray-400 line-through">${price}</p>
              </div>
            ) : (
              <div
                onClick={() => history.push(`/product/description/${id}`)}
                className="flex flex-row items-center"
              >
                <p className="mr-2 font-bold text-gray-900">${price}</p>
              </div>
            )}

            {pathname !== "/" ? (
              <div
                onClick={add_to_cart}
                className=" mb-2 mr-4 rounded-full bg-blue-primary p-2 text-center text-xs font-semibold capitalize text-white hover:bg-blue-dark"
              >
                {/* <BlueButton text="add to cart" onClick={add_to_cart} /> */}
                <ShoppingCartIcon height={16} width={16} />
              </div>
            ) : (
              <div className=" mb-2 mr-4 flex flex-row items-center text-center text-xs font-semibold capitalize">
                <StarIcon
                  className="font-semibold text-yellow-400"
                  height={20}
                  width={20}
                />
                <p>{Math.floor(rating ? rating : 0)}(5)</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
