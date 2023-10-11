"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";

import { BsCart2 } from "react-icons/bs";
import Link from "next/link";
import { getLinks } from "@/helpers";
import Navlink from "../utils/Navlink";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);

  const links = getLinks();

  useLayoutEffect(() => {
    const { height } = navRef.current.getBoundingClientRect();
    // console.log(height)
    setNavHeight(height);
    // console.log(activePath);
  }, [navOpen]);

  useEffect(() => {
    navOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [navOpen]);

  const toggleNav = () => {
    setNavOpen((navOpen) => !navOpen);
  };

  return (
    <header className="relative">
      <nav
        className="container flex justify-between py-6 md:py-9 lg:py-12 items-center z-10"
        ref={navRef}
      >
        <div>
          <div
            className="mobile md:hidden grid place-content-center space-y-3 h-[35px] w-[35px] cursor-pointer"
            onClick={toggleNav}
          >
            <div
              className={`w-[35px] h-[1px] bg-black ${
                navOpen && "-rotate-[135deg] origin-[55%] translate-y-2"
              } transition-all duration-300`}
            />
            <div
              className={`w-[35px] h-[1px] bg-black ${
                navOpen && "rotate-[135deg] origin-[55%] -translate-y-1"
              } transition-all duration-300`}
            />
          </div>
          <div className="tablet-nav hidden md:flex font-poppins gap-5">
            {links.map(({ name, path }) => (
              <Navlink name={name} path={path} className="" />
            ))}
          </div>
        </div>
        <Link href="/" className="font-inter font-medium text-[26px] leading-9 text-center">
          Alameda
        </Link>
        <div className="flex items-center gap-10">
          <div className="hidden md:block">icons socials</div>
          <Link
            href="/cart"
            className="flex items-center gap-2 text-base cursor-pointer"
          >
            <BsCart2 className="h-[25px] w-[25px]" /> 0
          </Link>
        </div>
      </nav>
      {navOpen && (
        <aside
          className={`fixed w-screen z-8 top-[${
            navHeight + "px"
          }] h-screen bg-white flex justify-center`}
        >
          <ul className="mt-60 text-center space-y-5 font-poppins">
            {links.map(({ name, path }) => (
              <li>
                <Navlink
                  name={name}
                  path={path}
                  className="text-4xl font-extralight font leading-9"
                />
              </li>
            ))}
          </ul>
        </aside>
      )}
    </header>
  );
};

export default Navbar;
