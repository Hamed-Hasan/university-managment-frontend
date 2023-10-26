"use client"
import React, { useState, useEffect } from "react";
import Header from "@/components/HomePage/Header";
import HomeFooter from "@/components/HomePage/Footer";
import Banner from "@/components/HomePage/Banner";
import Categories from "@/components/HomePage/Categories";
import Companies from "@/components/HomePage/Companies";
import CourseNews from "@/components/HomePage/CourseNews";
import Courses from "@/components/HomePage/Courses";
import Dominate from "@/components/HomePage/Dominate";
import StudentSay from "@/components/HomePage/StudentSay";
import Loading from "./loading";

const components = [
  Header,
  Banner,
  Companies,
  Courses,
  Categories,
  StudentSay,
  CourseNews,
  Dominate,
  HomeFooter,
];

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay, e.g., fetching data from an API.
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <main className="text-gray-600 body-font bg-[#1B143F] h-max">
      {loading ? (
        <Loading />
      ) : (
        components.map((Component, index) => <Component key={index} />)
      )}
    </main>
  );
}

export default Home;
