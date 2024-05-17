import PrimaryButton from "@/components/buttons/PrimaryButton";
import SearchModal from "@/components/search-modal/SearchModal";
import { useToast } from "@/components/ui/use-toast";
import { Store } from "@/context/Store";
import { getMessage } from "@/helpers/getMessage";
import DashboardLayout from "@/layouts/DashboardLayout";
import { apiUrl } from "@/utils/apiUrl";
import { XMarkIcon } from "@heroicons/react/16/solid";
import {
  BackspaceIcon,
  BanknotesIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/16/solid";
import axios from "axios";
import React, { useContext, useState } from "react";

type Props = {};

const Pos = (props: Props) => {
  // @ts-ignore
  const { state, dispatch } = useContext(Store);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const { cart } = state;
  const removeFromCart = (item: any) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const createOrderHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(`${apiUrl}/order/create`, {
        orderItems: cart.cartItems,
      });
      toast({
        title: "Product added",
        description: "New product added to stock",
      });
      setLoading(false);
    } catch (error) {
      toast({
        title: "Error adding product",
        description: getMessage(error),
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-secondary h-full flex-1">
        <div className="max-w-7xl py-8 px-4 mx-auto w-full">
          <div className="bg-primary p-4 main-border rounded-xl grid grid-cols-3 gap-4">
            <div className="col-span-2 main-border rounded-lg p-4 flex flex-col space-y-8">
              <SearchModal />
              <div className="flex flex-col space-y-2 text-sm ">
                <p className="heading-text text-md font-medium">Results</p>
                {cart?.cartItems?.map((item: any) => (
                  <div
                    key={item.sku}
                    className="grid cursor-pointer grid-cols-4 border-y border-zinc-100 dark:border-zinc-800 py-2"
                  >
                    <p>{item.name}</p>
                    <p>{item.sku}</p>
                    <p>{item.price}</p>
                    <div onClick={() => removeFromCart(item)}>
                      <XMarkIcon height={16} width={16} />
                    </div>
                  </div>
                ))}
                <div className="flex flex-row items-center justify-between text-zinc-400">
                  <p>Subtotal</p>
                  <p>
                    $
                    {cart?.cartItems.reduce(
                      (a: any, c: any) =>
                        parseInt(a) + parseInt(c.quantity) * parseInt(c.price),
                      0
                    )}
                  </p>
                </div>
                <div className="flex flex-row items-center justify-between text-zinc-400">
                  <p>Tax 10%</p>
                  <p>$0</p>
                </div>
                <div className="flex flex-row items-center justify-between text-zinc-400">
                  <p>Discount 20%</p>
                  <p>$0</p>
                </div>
              </div>
              <div className="flex flex-row py-8 text-3xl font-bold heading-text items-center justify-between border-y border-zinc-200 dark:border-zinc-800 text-zinc-400">
                <p>Total</p>
                <p>
                  $
                  {cart?.cartItems.reduce(
                    (a: any, c: any) =>
                      parseInt(a) + parseInt(c.quantity) * parseInt(c.price),
                    0
                  )}
                </p>
              </div>

              <div className="flex flex-col space-y-4 pb-8 border-b border-zinc-200 dark:border-zinc-800 ">
                <p>Payment Method</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1 bg-secondary flex flex-row space-x-2 p-3 items-center content-center justify-center rounded">
                    <BanknotesIcon height={20} width={20} />
                    <p>Cash</p>
                  </div>
                  <div className="col-span-1 bg-secondary flex flex-row space-x-2 p-3 items-center content-center justify-center rounded">
                    <CreditCardIcon height={20} width={20} />
                    <p>Debit Card</p>
                  </div>
                  <div className="col-span-1 bg-secondary flex flex-row space-x-2 p-3 items-center content-center justify-center rounded">
                    <DevicePhoneMobileIcon height={20} width={20} />
                    <p>Digital Wallet</p>
                  </div>
                </div>{" "}
              </div>
              <PrimaryButton
                loading={loading}
                onClick={createOrderHandler}
                text="Charge Items"
              />
            </div>
            <div className="col-span-1 main-border rounded-lg overflow-hidden">
              <div className="h-1/2 bg-zinc-50 dark:bg-zinc-800 grid main-border-b text-blue-600 text-7xl font-bold items-center justify-center content-center">
                $
                {cart?.cartItems.reduce(
                  (a: any, c: any) =>
                    parseInt(a) + parseInt(c.quantity) * parseInt(c.price),
                  0
                )}
              </div>
              <div className="grid items-center content-center justify-center p-4 gap-2">
                <div className="flex flex-row items-center gap-2">
                  <NumPadItem number={"1"} />
                  <NumPadItem number={"2"} />
                  <NumPadItem number={"3"} />
                  <NumPadItem number={"+10"} darker />
                </div>
                <div className="flex flex-row items-center gap-2">
                  <NumPadItem number={"4"} />
                  <NumPadItem number={"5"} />
                  <NumPadItem number={"6"} />
                  <NumPadItem number={"+10"} darker />
                </div>
                <div className="flex flex-row items-center gap-2">
                  <NumPadItem number={"7"} />
                  <NumPadItem number={"8"} />
                  <NumPadItem number={"9"} />
                  <NumPadItem number={"+20"} darker />
                </div>
                <div className="flex flex-row items-center gap-2">
                  <NumPadItem number={"+/-"} darker />
                  <NumPadItem number={"0"} />
                  <NumPadItem number={","} />
                  <NumPadItem
                    number={<BackspaceIcon height={16} width={16} />}
                    darker
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

interface NumPadItemProps {
  number: any;
  darker?: boolean;
}

const NumPadItem = (props: NumPadItemProps) => {
  return (
    <div
      className={`${
        props.darker
          ? "bg-zinc-200 dark:bg-zinc-800 "
          : "bg-zinc-50 dark:bg-zinc-950 "
      } h-12 w-12  main-border rounded p-2 grid items-center content-center justify-center`}
    >
      <p className="font-medium heading-text text-sm">{props.number}</p>
    </div>
  );
};

export default Pos;
