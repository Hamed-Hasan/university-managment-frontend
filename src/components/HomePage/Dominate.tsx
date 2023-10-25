"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DominateCard from '@/assets/donate-card.png';
import Link from 'next/link';

const Dominate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    setTimeout(() => {
      setContent({
        title: 'The number one factor in relevance drives out resistance.',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      });

      // Turn off loading
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <section className="dominate-bg">
      <div className="container px-14 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <p className="leading-relaxed text-[#A99CFF] font-bold text-md">
              Join Dominie At Best
            </p>

            {isLoading ? (
              <div className="animate-pulse">
                <p className="text-white font-bold text-2xl leading-tight my-4">
                  Loading title...
                </p>
                <p className="text-[#B7CBFA] font-extralight text-md leading-tight">
                  Loading description...
                </p>
              </div>
            ) : (
              <>
                <p className="text-white font-bold text-2xl leading-tight my-4">
                  {content.title}
                </p>
                <p className="text-[#B7CBFA] font-extralight text-md leading-tight">
                  {content.description}
                </p>
              </>
            )}
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full text-right flex justify-end rounded-lg overflow-hidden sm:mt-0">
          <Image src={DominateCard} width={400} height={400} alt="dominate" />
        </div>
        <div className="flex items-center justify-center -mt-[50px]">
          <Link
            href="/"
            className="course-button bg-transparent border-0  px-3 focus:outline-none rounded text-slate-400 md:mt-0"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dominate;
