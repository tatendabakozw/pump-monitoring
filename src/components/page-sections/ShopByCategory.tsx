import Image from "next/image";
import React from "react";

type Props = {};

const ShopByCategory = (props: Props) => {
  return (
    <>
      {/* shop by category */}
      <section aria-labelledby="category-heading" className="p-8 bg-zinc-50">
        <div className="max-w-7xl mx-auto bg-white md:p-8 p-4 rounded-lg border border-zinc-300/20">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2
              id="category-heading"
              className="md:text-xl text-base font-bold tracking-tight text-gray-700"
            >
              Shop by Category
            </h2>
            <a
              href="/categories"
              className="hidden font-semibold text-blue-primary hover:text-blue-primary sm:block"
            >
              Browse all categories<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8 ">
            <div className="group relative aspect-w-2 md:h-96 h-40 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none border">
              <Image
                layout="fill"
                objectFit="cover"
                src={"/images/surprise.jpg"}
                alt="suprised user."
                className="object-center object-cover group-hover:opacity-75"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50"
              />
              <div className="p-6 flex items-end">
                <div>
                  <h3 className="font-semibold text-white">
                    <span>
                      <span className="absolute inset-0" />
                      Suprise Me
                    </span>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Shop now
                  </p>
                </div>
              </div>
            </div>
            <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none border">
              <Image
                layout="fill"
                src={"/images/tech_stuff.jpg"}
                alt="tech category."
                className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />
              <div className="p-6 flex items-end sm:absolute sm:inset-0">
                <div>
                  <h3 className="font-semibold text-white">
                    <span>
                      <span className="absolute inset-0" />
                      Tech Stuff
                    </span>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Shop now
                  </p>
                </div>
              </div>
            </div>
            <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none border">
              <Image
                layout="fill"
                src={"/images/clothes.jpg"}
                alt="Clothes and fashion"
                className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />
              <div className="p-6 flex items-end sm:absolute sm:inset-0">
                <div>
                  <h3 className="font-semibold text-white">
                    <div>
                      <span className="absolute inset-0" />
                      Clothes and fashion
                    </div>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Shop now
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:hidden">
            <a
              href="/categories"
              className="block font-semibold text-blue-primary hover:text-blue-primary"
            >
              Browse all categories<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopByCategory;
