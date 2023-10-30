import React from 'react';

const Banner = () => {
    return (
        <section className="text-gray-600 body-font banner-images relative z-10 container mx-auto">
  <div className="container mx-auto flex px-5 pb-12 pt-8 items-center justify-center flex-col">
    
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font text-xl lg:text-6xl mb-4 font-bold text-gray-200">Good coaching is good teaching</h1>
      <p className="mb-8 px-6 lg:px-14 py-3 text-gray-300 font-light leading-relaxed">In a coaching role, you ask the questions and rely more on your staff, who become the experts, to provide the information.</p>
      <div className="flex justify-center gap-7">
        <button className="banner_btn_left inline-flex text-white bg-transparent border-0 py-2 px-6 focus:outline-none  rounded text-lg">Join as Student</button>
        {/* <button className="ml-4 inline-flex text-white  bg-transparent border-0 py-2 px-6 focus:outline-none rounded text-lg banner_btn_right">Join as Instructor</button> */}
      </div>
    </div>
  </div>
 
</section>
    );
};

export default Banner;