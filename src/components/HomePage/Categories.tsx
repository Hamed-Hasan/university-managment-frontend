import React from "react";
import Marketing from "@/assets/categories/marketing.png";
import Image from "next/image";
const Categories = () => {
  return (
    <div>
      <h2 className="text-center text-white text-3xl py-16 font-bold ">
        Top Categories
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="p-4 flex flex-col items-center bg-transparent border border-gray-600 rounded-lg shadow md:flex-row   dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="pr-3">
            <Image src={Marketing} width={50} height={50} alt="marketing" />
          </div>
          <div className="flex flex-col justify-between leading-normal gap-1">
            <h5 className=" text-2xl font-bold tracking-tight text-gray-200">
              Digital Marketing
            </h5>
            <p className=" font-normal text-gray-400">25 Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
