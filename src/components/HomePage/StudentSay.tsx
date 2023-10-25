"use client";
import React from "react";
import Image from "next/image";
import StudentCard from "@/assets/student-card.png";
import Students from "@/assets/students.png";

const StudentSay = () => {
  return (
    <section className="-mt-[190px]">
      <div className="student-bg container px-16 mx-auto body-font py-24">
        <div className="mt-[230px]">
          <div className="bg-[#2D2752] flex px-16 rounded-3xl  py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image
                src={StudentCard}
                width={400}
                height={400}
                className="object-cover object-center rounded"
                alt="student-card"
              />
            </div>

            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col  items-center text-center">
              <p className=" text-[#A99CFF] font-bold">Testimonials</p>
              <h1 className="font-bold text-4xl text-white pt-4">
                what our students say?
              </h1>
              <Image
                src={Students}
                width={600}
                height={600}
                className="py-14 object-cover object-center rounded"
                alt="students"
              />

              <div className="">
                <h1 className="title-font font-bold text-xl text-white">
                  Hamed Hasan
                </h1>
                <p className="py-2 leading-relaxed text-[#b7cbfad3]">
                  Bostsolf.co
                </p>
                <p className=" font-sans leading-tight text-[#b7cbfa86]">
                  One ipsum dolor sit amet, elit, sed do eiusmod tempor ut
                  labore et dolore magna aliqua. Quis ipsum ultrices gravida.
                  Risus dolore magna aliqua. Quis ipsum ultrices gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSay;
