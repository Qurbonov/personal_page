"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { SiInstagram, SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";
const links = [
  // { url: "/", title: "Main" },
  // { url: "/about", title: "thoughts" },
  // { url: "/portfolio", title: "portfolio" },
  // { url: "/contact", title: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="h-full">
      {/* LINKS */}
      {/* <div className="hidden md:flex gap-4 w-1/3 text-sky-100 justify-center">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div> */}
      {/* LOGO */}
      <div className=" flex justify-center items-center lg:flex lg:justify-center pt-4 mb-3 lg:mb-0 tracking-wide">
        <Link
          href="/"
          className="lg:text-sm md:text-xl text-base p-3 font-semibold border-b"
        >
          <span className="text-white">Qurbonov</span>
          <span className="rounded-lg bg-white text-indigo-900 mx-4 p-2">
            Po&apos;latjon
          </span>
          <span className="text-white">Nurillayevich</span>
        </Link>
      </div>
      {/* SOCIAL 
      md:flex gap-4 w-1/3 justify-center
      */}
      {/*  */}
      {/* RESPONSIVE MENU */}
      {/* <div className="md:hidden"> */}
      {/* MENU BUTTON */}
      {/* <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
      {/* {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div> */}
      {/* )}
      </div>  */}
    </div>
  );
};

export default Navbar;
