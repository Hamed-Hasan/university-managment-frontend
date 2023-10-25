"use client"
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Slide1 from "@/assets/slide1.png";
import Slide2 from "@/assets/slide2.png";
import Slide3 from "@/assets/slide3.png";
import Slide4 from "@/assets/slide1.png";
import Loading from '@/app/loading';

const slideData = [
  {
    image: Slide1,
    title: "5 Graphic Design Skills That Will Strengthen Your Creativity",
    date: "Apr 9, 2020",
  },
  {
    image: Slide2,
    title: "Another Course Title",
    date: "May 5, 2020",
  },
  {
    image: Slide3,
    title: "A Third Course Title",
    date: "Jun 12, 2020",
  },
  {
    image: Slide4,
    title: "One More Course Title",
    date: "Jul 21, 2020",
  },
];

const CourseNews = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 2000); 
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoPlay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='container mx-auto px-20'>
      <div className='text-center'>
        <h2 className="font-bold text-3xl text-white">About latest tips, news, and courses</h2>
        <p className="text-md text-slate-500 px-64 mx-auto pt-4 pb-14">
          Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices
        </p>
      </div>
      {isLoading ? (
   <Loading/>
      ) : (

        <Slider {...settings}>
          {slideData.map((slide, index) => (
            <div key={index}>
              <div className="h-full overflow-hidden">
                <Image src={slide.image} width={400} height={400} alt={`Course ${index + 1}`} />
                <div className="">
                  <h2 className="tracking-widest text-xs title-font font-bold text-white mb-1 pt-5">
                    {slide.title}
                  </h2>
                  <p className="leading-relaxed mb-3 text-white">{slide.date}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default CourseNews;
