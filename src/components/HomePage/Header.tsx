import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="text-gray-600 body-font border-b border-dashed border-b-neutral-500">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900 text-slate-300">Home</Link>
            <Link href="/" className="mr-5 hover:text-gray-900 text-slate-300 mx-6">Courses</Link>
            <Link href="/" className="mr-5 hover:text-gray-900 text-slate-300 mx-6">Blog</Link>
            <Link href="/" className="mr-5 hover:text-gray-900 text-slate-300 mx-6">Shop</Link>
          </nav>
          <Link href="/" className=" header-button inline-flex items-center bg-transparent border-0 py-1 px-3 focus:outline-none rounded text-slate-400 mt-4 md:mt-0">Login
  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7"></path>
  </svg>
</Link>
        </div>
      </header>
    );
};

export default Header;