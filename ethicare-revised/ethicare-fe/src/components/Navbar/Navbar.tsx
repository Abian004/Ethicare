'use client'
import Link from "next/link";
import React, { useState } from "react";

// Navigation items array
const navItems = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Ethicare Share", href: "/eShare" },
  { name: "Ethicare Benevolence", href: "/eBenevolence" },
  // Example placeholder for future nested navigation:
  // { 
  //   name: "Services", 
  //   href: "#", 
  //   children: [
  //     { name: "Service 1", href: "/service1" },
  //     { name: "Service 2", href: "/service2" },
  //   ],
  // },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderNavItems = (items: typeof navItems) => {
    return items.map((item) => (
      <li key={item.name} className="relative">
        <Link href={item.href} className="hover:text-ethicare-pink/50 text-ethicare-pink">
          {item.name}
        </Link>
        {/* Placeholder for future dropdown if children are present */}
        {/* {item.children && (
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 space-y-2 py-2 px-4 rounded-md">
            {item.children.map((child) => (
              <li key={child.name}>
                <Link href={child.href} className="hover:text-gray-500">
                  {child.name}
                </Link>
              </li>
            ))}
          </ul>
        )} */}
      </li>
    ));
  };

  return (
    <nav className="navbar bg-white hover:text-ethicare-pink/50 text-ethicare-pink shadow-md px-4 py-2 inline-flex items-center justify-center mx-auto rounded-2xl">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 font-bold text-lg">
        {renderNavItems(navItems)}
      </ul>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden relative w-10 h-10 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="sr-only">Toggle menu</span>
        <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-5 bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""
              }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
          ></span>
        </div>
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-lg font-bold">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
