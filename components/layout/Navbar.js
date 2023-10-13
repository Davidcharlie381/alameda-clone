"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"

import { BsCart2 } from "react-icons/bs";
import { BiLogoInstagram } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";

import Link from "next/link";
import { getLinks } from "@/helpers";
import Navlink from "../utils/Navlink";

const Navbar = () => {

const cart = useSelector((state) => state.cart);

  const [navOpen, setNavOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);

  const links = getLinks();

  const getItemsCount = () => {
    return cart.reduce((acc, item) => acc + item.qty, 0)
  }

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
        className="container flex justify-between py-6 md:py-9 lg:py-12 items-center z-100"
        ref={navRef}
      >
        <div className="w-1/5">
          <div
            className="mobile xl:hidden grid place-content-center space-y-3 h-[35px] w-[35px] cursor-pointer"
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
          <div className="tablet-nav hidden xl:flex font-poppins gap-5">
            {links.map(({ name, path }) => (
              <Navlink
                key={path}
                name={name}
                path={path}
setNavOpen={setNavOpen}
                className="text-base leading-4 font-light"
              />
            ))}
          </div>
        </div>
        <Link
          href="/"
onClick={() => setNavOpen(false)}
          className="w-3/5 font-inter font-medium text-[26px] md:text-[32px] leading-9 text-center flex-1"
        >
          Alameda
        </Link>
        <div className="w-1/5 flex items-center justify-end gap-10">
          <div className="hidden xl:flex justify-center gap-10">
            <BiLogoInstagram className="h-[25px] w-[25px]" />
            <BsTwitter className="h-[25px] w-[25px]" />
          </div>

          <Link
            href="/cart"
onClick={() => setNavOpen(false)}
            className="flex items-center gap-2 text-base cursor-pointer"
          >
            <BsCart2 className="h-[25px] w-[25px]" /> {getItemsCount()}
          </Link>
        </div>
      </nav>
      {navOpen && (
        <aside
          className={`fixed w-screen z-99 top-[${
            navHeight + "px"
          }] h-screen bg-white flex justify-center`}
        >
          <ul className="mt-60 text-center space-y-5 font-poppins">
            {links.map(({ name, path }) => (
              <li>
                <Navlink
                  key={path}
                  name={name}
                  path={path}
setNavOpen={setNavOpen}
                  className="text-4xl font-light font leading-9"
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
