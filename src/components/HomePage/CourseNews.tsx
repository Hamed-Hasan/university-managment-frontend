"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Slide1 from "@/assets/slide1.png"
import Slide2 from "@/assets/slide2.png"
import Slide3 from "@/assets/slide3.png"
import Slide4 from "@/assets/slide4.png"

const CourseNews = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='container mx-auto px-20'>
            <div className='text-center'>
                <h2 className="font-bold text-3xl text-white">About latest tips,news and course</h2>
                <p className="text-md text-slate-500 px-64 mx-auto pt-4 pb-14">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices</p>
            </div>
        <Slider {...settings}>
          <div>
          <div className="h-full overflow-hidden">
          <Image src={Slide1} width={400} height={400} alt="course 1"/>
          <div className="">
            <h2 className="tracking-widest text-xs title-font font-bold text-white mb-1 pt-5">5 Graphic Design Skills That Will
Strengthen Your Creativity</h2>
            <p className="leading-relaxed mb-3 text-white">Apr 9, 2020</p>
          
          </div>
        </div>
          </div>
          <div>
          <div className="h-full overflow-hidden">
          <Image src={Slide2} width={400} height={400} alt="course 1"/>
          <div className="">
            <h2 className="tracking-widest text-xs title-font font-bold text-white mb-1 pt-5">5 Graphic Design Skills That Will
Strengthen Your Creativity</h2>
            <p className="leading-relaxed mb-3 text-white">Apr 9, 2020</p>
          
          </div>
        </div>
          </div>
          <div>
          <div className="h-full overflow-hidden">
          <Image src={Slide3} width={400} height={400} alt="course 1"/>
          <div className="">
            <h2 className="tracking-widest text-xs title-font font-bold text-white mb-1 pt-5">5 Graphic Design Skills That Will
Strengthen Your Creativity</h2>
            <p className="leading-relaxed mb-3 text-white">Apr 9, 2020</p>
          
          </div>
        </div>
          </div>
          <div>
          <div className="h-full overflow-hidden">
          <Image src={Slide1} width={400} height={400} alt="course 1"/>
          <div className="">
            <h2 className="tracking-widest text-xs title-font font-bold text-white mb-1 pt-5">5 Graphic Design Skills That Will
Strengthen Your Creativity</h2>
            <p className="leading-relaxed mb-3 text-white">Apr 9, 2020</p>
          
          </div>
        </div>
          </div>
      
         
        
        </Slider>
      </div>
    );
};

export default CourseNews;