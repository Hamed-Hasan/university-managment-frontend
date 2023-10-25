"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Loading from "@/app/loading";
import { Category } from "@/types";
import { categoriesData } from "@/types/fakeData";

const Categories: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setCategories(categoriesData);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="pb-20">
      <div className="categories-images"></div>
    <div className="container mx-auto px-7 mt-[-399px]">
      <h2 className="text-center text-white text-3xl py-16 font-bold">
        Top Categories
      </h2>
  
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-4 flex flex-col items-center bg-transparent border border-gray-600 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover-bg-gray-700"
            >
              <div className="pr-3">
                <Image
                  src={category.image}
                  width={50}
                  height={50}
                  alt={category.title}
                />
              </div>
              <div className="flex flex-col justify-between leading-normal gap-1">
                <h5 className="text-2xl font-bold tracking-tight text-gray-200">
                  {category.title}
                </h5>
                <p className="font-normal text-gray-400">
                  {category.courseCount} Courses
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
  
  );
};

export default Categories;
