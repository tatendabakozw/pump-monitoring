import HeroSection from "@/components/page-sections/HeroSection";
import ShopByCategory from "@/components/page-sections/ShopByCategory";
import GeneralLayout from "@/layouts/GeneralLayout";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Home() {
  return (
    <GeneralLayout>
      <HeroSection />
      <div className="bg-zinc-50">
        <div className="max-w-7xl py-8 w-full mx-auto overflow-x-hidden">
          <div className="flex flex-row items-center pb-8 justify-between space-x-4">
            <p className="text-zinc-700 font-semibold md:text-2xl text-lg flex-shrink-0">
              Featured Categories
            </p>
            <div className="flex flex-row items-center justify-between md:space-x-4 space-x-2">
              <button className="bg-white rounded-full p-2 border border-zinc-300/20 ">
                <ArrowLeftIcon height={16} width={16} />
              </button>
              <button className="bg-white rounded-full p-2 border border-zinc-300/20">
                <ArrowRightIcon height={16} width={16} />
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
          </div>
        </div>
      </div>

      <ShopByCategory />
    </GeneralLayout>
  );
}

const CategoryItem = () => {
  return (
    <div className=" bg-white border border-zinc-300/20 p-2 rounded-lg flex flex-col space-y-4">
      <div className="h-60 w-60 relative">
        <Image src={"/applieane.png"} alt="category 1 item" layout="fill" />
      </div>
      <p className="text-center text-sm font-medium text-zinc-700 capitalize">
        Kitchen and dining
      </p>
    </div>
  );
};
