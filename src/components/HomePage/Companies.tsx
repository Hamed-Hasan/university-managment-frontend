import React from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Image1 from "@/assets/img1.png";
import Image2 from "@/assets/img2.png";
import Image3 from "@/assets/img3.png";
import Image4 from "@/assets/img4.png";
import Image5 from "@/assets/img5.png";
import Image6 from "@/assets/Programming-Hero.svg";
import Image7 from "@/assets/phitron.png";

const images = [
  { src: Image1, className: '-mt-10' },
  { src: Image2 },
  { src: 'EPAM', className: 'text-[#8F85C2] font-bold pr-5 lg:pr-0 text-4xl line-through' },
  { src: Image3 },
  { src: Image6, width: 100, height: 100, text: 'Programming Hero', className: 'lg:-mt-6 pl-8 lg:pl-0' },
  { src: Image4 },
  { src: Image5 },
  { src: Image7, width: 90, height: 90, className: 'ml-10' },
];

const Companies = () => {
  return (
    <div className="-mt-24 mb-24 relative z-50 container mx-auto lg:px-24">
      <Carousel dots={false} slidesToShow={5} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />} autoplay={true}>
        {images.map((item, index) => (
          <div key={index} className={item.className}>
            {item.src === 'EPAM' ? 'EPAM.co' : (
              <div className="text-center   flex items-center">
                <Image
                  src={item.src}
                  width={item.width || 150}
                  height={item.height || 150}
                  alt={`Image ${index + 1}`}
                />
                <p className="text-white font-bold -ml-8 flex ">{item.text}</p> 
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Companies;
