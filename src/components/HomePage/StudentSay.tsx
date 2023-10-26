"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import StudentCard from "@/assets/student-card.png";
import Students from "@/assets/students.png";
import Loading from "@/app/loading";

const testimonials = [
  {
    name: "Hamed Hasan",
    company: "Bostsolf.co",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  // more testimonials as needed
];

const StudentSay = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section className="-mt-[270px] lg:-mt-[190px]">
      <div className="student-bg container px-10 lg:px-16 mx-auto body-font py-24">
        <div className="mt-[230px]">
          <div className="bg-[#2D2752] flex px-4 lg:px-16 rounded-3xl  py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image
                src={StudentCard}
                width={400}
                height={400}
                className="object-cover object-center rounded"
                alt="student-card"
              />
            </div>

            <div className="lg:flex-grow md:w-1/2 flex flex-col  items-center text-center">
              <p className="text-[#A99CFF] font-bold">Testimonials</p>
              <h1 className="font-bold text-xl lg:text-4xl text-white pt-4">
                What Our Students Say?
              </h1>
              <Image
                src={Students}
                width={600}
                height={600}
                className="py-14 object-cover object-center rounded"
                alt="students"
              />

              {loading ? (
                <Loading />
              ) : (
                testimonials.map((testimonial, index) => (
                  <div key={index} className="py-8 text-center">
                    <h1 className="title-font font-bold text-xl text-white">
                      {testimonial.name}
                    </h1>
                    <p className="py-2 leading-relaxed text-[#b7cbfad3]">
                      {testimonial.company}
                    </p>
                    <p className="font-sans leading-tight text-[#b7cbfa86]">
                      {testimonial.text}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSay;
