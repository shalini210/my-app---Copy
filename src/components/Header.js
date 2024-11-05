import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full text-white py-10 flex
    relative z-50
     justify-between items-center border-b-[1px] border-b-blue-600">
      <div>
        <h1 className="text-2xl font-bold uppercase">Company Name</h1>
      </div>
      <div>
        <ul className="flex gap-6 text-sm uppercase font-semibold z-20">
          <li><Link href="/"> Home</Link></li>
          <li><Link href="/about#about"> About</Link></li>
          <li><Link href="/services#services"> Services</Link></li>
          
          <li><Link href="/contact#contact">Contact</Link></li>
        </ul>
      </div>
      <div>
        <Link href="/contact#contact" className="bg-green-600 py-1 px-6 rounded-xl text-base uppercase font-semibold">
          Email Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
