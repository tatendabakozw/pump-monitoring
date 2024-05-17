import { useFetch } from "@/hooks/useFetch";
import { apiUrl } from "@/utils/apiUrl";
import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import React from "react";
import moment from "moment";

type Props = {};

const OrdersTable = (props: Props) => {
  const response = useFetch(`${apiUrl}/order/all`);
  console.log(response?.data?.orders);

  return (
    <div className="bg-primary flex flex-col main-border gap-4 p-4 space-y-2 rounded-lg">
      <div className="flex flex-col space-y-1">
        <p className=" font-semibold">Sold Products</p>
        <p className="text-zinc-400 text-xs font-medium">
          Here is a list of all your products you sold.
        </p>
      </div>
      {response.state === "fetching" ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <>
          {response?.data?.orders?.map((item: any) => (
            <div
              key={item._id}
              className="border-y border-zinc-100 py-2 sapce-y-4 dark:border-zinc-800"
            >
              <p className="main-text font-medium text-sm">
                Done {moment(item.createdAt).fromNow()}
              </p>

              <div className="grid grid-cols-5 text-sm font-semibold heading-text">
                <div className="col-span-1">Name</div>
                <div className="col-span-1">SKU</div>
                <div className="col-span-1">Quantity</div>
                <div className="col-span-1">Price</div>
              </div>
              {item.orderItems.map((order_item: any) => (
                <div
                  key={item.sku}
                  className="grid grid-cols-5 text-sm text-zinc-700s"
                >
                  <div className="col-span-1">{order_item.name}</div>
                  <div className="col-span-1">{order_item.sku}</div>
                  <div className="col-span-1">{order_item.quantity}</div>
                  <div className="col-span-1">{order_item.price}</div>
                </div>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default OrdersTable;
