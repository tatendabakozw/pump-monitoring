import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Store } from "@/context/Store";
import { useFetch } from "@/hooks/useFetch";
import { apiUrl } from "@/utils/apiUrl";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";

type Props = {};

function SearchModal({}: Props) {
  const [query, setQuery] = useState("");
  const url = `${apiUrl}/product/all/?keyword=${query}`;
  const response = useFetch(url);
  // @ts-ignore
  const { dispatch } = useContext(Store);

  const addItemToCart = (item: any) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-row items-center flex-1 bg-primary main-border text-sm rounded-lg px-2 space-x-4">
          <MagnifyingGlassIcon
            height={20}
            width={20}
            className="text-zinc-400"
          />
          <input
            type="text"
            className="border-none outline-none flex-1 py-2 text-zinc-700"
            placeholder="search item"
          />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>What do you want to sell</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row items-center flex-1 bg-primary main-border text-sm rounded-lg px-2 space-x-4">
                <MagnifyingGlassIcon
                  height={20}
                  width={20}
                  className="text-zinc-400"
                />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="border-none outline-none flex-1 py-2 text-zinc-700"
                  placeholder="search item"
                />
              </div>
              {response.data.products?.map((item: any) => (
                <div
                  onClick={() => addItemToCart(item)}
                  key={item.sku}
                  className="grid cursor-pointer grid-cols-3 border-y border-zinc-200 dark:border-zinc-800 py-2"
                >
                  <p>{item.name}</p>
                  <p>{item.sku}</p>
                  <p>{item.price}</p>
                </div>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default SearchModal;
