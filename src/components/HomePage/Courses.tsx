"use client"
import Loading from "@/app/loading";
import {CourseProps} from "@/types/common";
import { coursesData } from "@/types/fakeData";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const CourseCard: React.FC<CourseProps> = ({
  id,
  title,
  category,
  students,
  duration,
  price,
  imageSrc,
}) => (
  <div className="p-4 the-card">
    <div className="max-w-sm border-0 bg-[#2D2752] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <div className="absolute bg-[#084FC7] text-slate-200 right-8 rounded-full font-bold top-28 p-4">
        {price}
      </div>
      <a href="#">
        <Image
          width={400}
          height={500}
          className="rounded-t-lg"
          src={imageSrc}
          alt={title}
        />
      </a>
      <div className="p-5">
        <p className="mb-3 font-normal text-[#B7CBFA]">{category}</p>
        <h5 className="mb-2 py-3 text-xl font-bold tracking-tight text-gray-200">
          {title}
        </h5>
        <div className="flex items-center justify-between">
          <p className="mb-3 font-normal text-[#B7CBFA]">{students} students</p>
          <p className="mb-3 font-normal text-[#B7CBFA]">{duration}</p>
        </div>
      </div>
    </div>
  </div>
);


const Courses: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="courses container mx-auto px-12">
      <div className="mx-auto text-center pb-14">
        <p className="text-[#B7CBFA] text-lg font-semibold">Join Dominie At Best</p>
        <h2 className="text-white text-3xl font-bold">Featured Courses</h2>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
          {coursesData.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              category={course.category}
              students={course.students}
              duration={course.duration}
              price={course.price}
              imageSrc={course.imageSrc}
            />
          ))}
        </div>
      )}

      <div className="flex items-center justify-center py-8">
        <Link
          href="/"
          className="course-button bg-transparent border-0 py-1 px-3 focus:outline-none rounded text-slate-400 mt-4 md:mt-0"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Courses;