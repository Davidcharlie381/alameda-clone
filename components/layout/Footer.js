"use client";

import { BiLogoInstagram } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Check out your spam folder, because we'll spam you like never before."
    );
  };

  return (
    <footer className="container text-center mt-20">
      <div className="flex justify-center gap-10">
        <BiLogoInstagram className="h-[25px] w-[25px]" />
        <BsTwitter className="h-[25px] w-[25px]" />
      </div>
      <p className="font-poppins text-base pt-10">
        Sign up to receive news and updates.
      </p>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="py-20 flex flex-col md:flex-row items-center justify-center max-w-xl mx-auto gap-5"
      >
        <input
          required
          type="email"
          placeholder="Email address"
          className="outline-0 focus:ring-2 ring-black ring-offset-2 px-8 py-5 border-[1px] font-poppins max-w-sm border-gray-300 w-full"
        />
        <button type="submit" className="bg-black/40  w-[130px] py-5 text-white font-poppins font-medium">
          Sign Up
        </button>
      </form>
      <p className="font-poppins text-base pt-10 mb-10">Built by devcharlie</p>
    </footer>
  );
};

export default Footer;
