import PrimaryButton from "@/components/buttons/PrimaryButton";
import CustomInput from "@/components/inputs/CustomInput";
import { getMessage } from "@/helpers/getMessage";
import DashboardLayout from "@/layouts/DashboardLayout";
import { apiUrl } from "@/utils/apiUrl";
import axios from "axios";
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

type Props = {};

const InventoryCreate = (props: Props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [sku, setSku] = useState("");
  const [expiry_days, setExpiryDays] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const createNewProduct = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(`${apiUrl}/product/create`, {
        name,
        price,
        quantity,
        sku,
        expiry_days,
      });
      toast({
        title: "Product added",
        description: "New product added to stock",
      });
      setLoading(false);
    } catch (error) {
      console.log(getMessage(error));
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
      <div className="bg-secondary">
        <div className="max-w-7xl px-4 py-16 w-full mx-auto space-y-8 ">
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-col space-y-1">
              <p className="text-start font-bold heading-text text-3xl ">
                Add new product
              </p>
              <p className="text-start main-text text-sm text-zinc-500 max-w-2xl">
                Use this page to add a new item to your inventory
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col space-y-8">
              <div className="bg-primary main-border p-4 flex-col space-y-4 rounded-lg">
                <p className="font-medium heading-text">Basic Information</p>
                <div className="main-border p-4 rounded-lg">
                  <p className="main-text text-sm capitalize pb-1">
                    Product name
                  </p>
                  <CustomInput
                    value={name}
                    setValue={setName}
                    placeholder="Name"
                  />
                  <p className="main-text text-sm capitalize pb-1 pt-4">SKU</p>
                  <CustomInput
                    value={sku}
                    setValue={setSku}
                    placeholder="Stock keeping unit"
                  />

                  <p className="main-text text-sm capitalize pb-1 pt-4">
                    Days to expire
                  </p>
                  <CustomInput
                    value={expiry_days}
                    setValue={setExpiryDays}
                    placeholder="Days to expire"
                  />

                  <p className="main-text text-sm capitalize pb-1 pt-4">
                    Product description
                  </p>
                  <CustomInput
                    value={description}
                    textarea
                    rows={5}
                    setValue={setDescription}
                    placeholder="Description"
                  />
                </div>
              </div>
              <div className="bg-primary main-border p-4 flex-col space-y-4 rounded-lg">
                <p className="font-medium heading-text">Price</p>
                <div className="main-border p-4 rounded-lg">
                  <p className="main-text text-sm capitalize pb-1">Quantity</p>
                  <CustomInput
                    value={quantity}
                    setValue={setQuantity}
                    placeholder="Quantity"
                  />
                  <p className="main-text text-sm capitalize pb-1 pt-4">
                    Unit Price
                  </p>
                  <CustomInput
                    value={price}
                    setValue={setPrice}
                    placeholder="Name"
                  />
                </div>
              </div>
            </div>
            <button className="col-span-2">
              <PrimaryButton
                text="Create Product"
                loading={loading}
                onClick={createNewProduct}
              />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InventoryCreate;
