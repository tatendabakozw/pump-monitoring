import { useFetch } from "@/hooks/useFetch";
import { apiUrl } from "@/utils/apiUrl";
import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import React from "react";

type Props = {};

const ProductsTable = (props: Props) => {
  const response = useFetch(`${apiUrl}/product/all`);

  return (
    <div className="bg-primary flex flex-col main-border gap-4 p-4 space-y-2 rounded-lg">
      <div className="flex flex-col space-y-1">
        <p className=" font-semibold">Products List</p>
        <p className="text-zinc-400 text-xs font-medium">
          Here is a list of all your products.
        </p>
      </div>
      {response.state === "fetching" ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <>
          <div className="grid grid-cols-5 text-sm font-semibold heading-text">
            <div className="col-span-1">Name</div>
            <div className="col-span-1">SKU</div>
            <div className="col-span-1">Quantity</div>
            <div className="col-span-1">Price</div>
          </div>
          {response?.data?.products?.map((item: any) => (
            <div
              key={item.sku}
              className="grid grid-cols-5 text-sm text-zinc-700s"
            >
              <div className="col-span-1">{item.name}</div>
              <div className="col-span-1">{item.sku}</div>
              <div className="col-span-1">{item.quantity}</div>
              <div className="col-span-1">{item.price}</div>
              <div className="col-span-1 flex flex-row items-center space-x-4">
                <TrashIcon height={16} width={16} />
                <PencilIcon height={16} width={16} />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ProductsTable;
