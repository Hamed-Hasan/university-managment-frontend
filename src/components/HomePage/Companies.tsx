import React from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Image from 'next/image';

import Image1 from "@/assets/img1.png";
import Image2 from "@/assets/img2.png";
import Image3 from "@/assets/img3.png";
import Image4 from "@/assets/img4.png";
import Image5 from "@/assets/img5.png";

const images = [
  { src: Image1, className: '-mt-10' },
  { src: Image2 },
  { src: 'EPAM', className: 'text-[#8F85C2] font-bold text-4xl line-through' },
  { src: Image3 },
  { src: Image4 },
  { src: Image5 },
];

const Companies = () => {
  return (
    <div className="-mt-24 mb-24 relative z-50 container mx-auto lg:px-24">
      <Carousel  dots={false} slidesToShow={5} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />} autoplay={true} >
        {images.map((item, index) => (
          <div key={index} className={item.className}>
            {item.src === 'EPAM' ? 'EPAM.com' : <Image src={item.src} width={150} height={150} alt={`Image ${index + 1}`} />}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Companies;
