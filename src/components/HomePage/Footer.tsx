"use client";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

const HomeFooter = () => {
  const currentYear = new Date().getFullYear(); 
  
  return (
    <footer className="text-gray-600 body-font bg-[#2D2752]">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center gap-9 lg:gap-0 -mb-10 -mx-4">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font  text-white font-bold tracking-widest text-xl mb-3">
              EducationTemp
            </h2>
            <p className="lg:pt-8 text-gray-400 text-sm">
              Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolore eu fugiat nulla
              pariatur.
            </p>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full px-4">
            <h2 className="title-font  text-white font-bold tracking-widest text-xl mb-3">
              Quick Links
            </h2>
            <nav className="list-none mb-10 lg:pt-7">
              <div className="flex items-center justify-between lg:mt-2">
                <li>
                  <a className="text-gray-400 hover:text-gray-800">Home</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-800">Blog</a>
                </li>
              </div>
              <div className="flex items-center justify-between">
                <li>
                  <a className="text-gray-400 hover:text-gray-800">Course</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-800">Contact</a>
                </li>
              </div>
            </nav>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full px-4">
            <h2 className="title-font  text-white font-bold tracking-widest text-xl mb-3">
              Contact us
            </h2>
            <nav className="list-none mb-10 lg:pt-10">
              <li>
                <div className="flex items-center justify-start gap-4">
                  <p className="text-gray-400">
                    <BsTelephone />
                  </p>
                  <p className="text-gray-400">(+966) 595035008</p>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-start gap-4">
                  <p className="text-gray-400">
                    <AiOutlineMail />
                  </p>
                  <p className="text-gray-400">swe.hamedhasan@gmail.com</p>
                </div>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full lg:ml-16 lg:mt-8">
            <h2 className="title-font font-medium text-gray-200 flex items-center gap-4 lg:pt-12 tracking-widest text-sm mb-3">
              <p className="text-gray-400">
                <CiLocationOn />
              </p>
              <p className="text-gray-400">Macca Saudi Araia</p>
            </h2>
          </div>
        </div>
      </div>
      <div className="footer-line">
        <div className="container px-5 relative top-12 py-4 lg:py-8 flex flex-wrap mx-auto items-center">
          <p className=" text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center text-gray-400">
            Copyright {currentYear}  | All Rights Reserved{" "}
            <Link
              href="https://hamedhasan-dev.vercel.app"
              className="text-[#9C9CFF]"
            >
              Hamed Hasan
            </Link>
          </p>

          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <Link
              href="https://www.facebook.com/hamed.y.hasan0/"
              className="text-gray-500"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link
              href="https://twitter.com/HamedHasan75"
              className="ml-3 text-gray-500"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link
              href="https://github.com/Hamed-Hasan"
              className="ml-3 text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <path d="M12 2c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.11.793-.261.793-.58 0-.288-.01-1.05-.015-2.06-3.348.73-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.833 2.807 1.304 3.495.997.11-.777.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.236-3.22-.123-.303-.54-1.523.12-3.17 0 0 1.005-.322 3.3 1.23.96-.267 1.983-.4 3-.404 1.016.004 2.04.137 3 .404 2.29-1.553 3.295-1.23 3.295-1.23.662 1.647.245 2.867.12 3.17.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.475 5.92.43.36.813 1.097.813 2.22 0 1.607-.015 2.905-.015 3.29 0 .322.193.696.8.578 4.766-1.587 8.204-6.084 8.204-11.387 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/hamed-hasan"
              className="ml-3 text-gray-500"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
