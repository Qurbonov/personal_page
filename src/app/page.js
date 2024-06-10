"use client";

import React from "react";
import Image from "next/image";
import MotionTest from "@/components/motionTest";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiInstagram, SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

const Home = () => {
  return (
    <>
      {/* <MotionTest /> */}
      <div className="w-full flex items-center justify-center h-full">
        <div className="w-9/12 flex flex-col gap-1 lg:flex-row sm:flex-col md:flex-col ">
          <div className="w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.1, 0.2, 0.1],
                scale: {
                  type: "spring",
                  damping: 45,
                  stiffness: 20,
                  restDelta: 0.001,
                },
              }}
            >
              <Image
                src="/me.png"
                width={650}
                height={650}
                className="object-cover rounded-full shadow-2xl shadow-cyan-500/50 "
                priority={true}
                alt=""
              />
            </motion.div>
          </div>
          <div className="w-full flex flex-col items-center justify-center mt-8 lg:mt-0 md:mt-8 relative lg:pl-8">
            {/* <div className="lg:flex justify-center mb-3 lg:mb-0 tracking-wide absolute inset-x-0 top-0 ">
              <Link href="/" className="text-sm  p-3 font-semibold">
                <span className="text-white">Qurbonov</span>
                <span className="w-12 h-8 rounded-lg bg-white text-indigo-900 mx-2 p-2">
                  Po&apos;latjon
                </span>
                <span className="text-white ">Nurillayevich</span>
              </Link>
            </div> */}

            <h1 className="text-4xl md:text-6xl font-bold sm:text-center underline decoration-yellow-500">
              The Start line!
            </h1>
            <p className="text-center mt-8 lg:text-lg md:text-2xl text-2xl">
              <span className=" underline decoration-sky-200">
                Every morning
              </span>{" "}
              we come to the{" "}
              <span className=" underline decoration-yellow-200">
                start line
              </span>
              , brimming with optimism and ready to give it our all. We&apos;ll
              show you the{" "}
              <span className=" underline decoration-green-300">
                best results
              </span>{" "}
              we&apos;ve ever had!
            </p>
            <div className="flex items-center justify-center gap-8 mt-8">
              <Link
                href="https://www.linkedin.com/in/qurbonovp/"
                legacyBehavior
              >
                <a target="_blank">
                  <SiLinkedin size={20} />
                </a>
                {/* <Image src="/linkedin.png" alt="" width={24} height={24} /> */}
              </Link>
              <Link href="https://github.com/Qurbonov" legacyBehavior>
                <a target="_blank">
                  <SiGithub size={20} />
                </a>
                {/* <Image src="/github.png" alt="" width={24} height={24} /> */}
              </Link>
              {/* <Link
                href="https://www.instagram.com/polatjonnurillaevich/"
                legacyBehavior
              >
                <a target="_blank">
                  <SiInstagram size={20} />
                </a> */}
              {/* <Image src="/instagram.png" alt="" width={24} height={24} /> */}
              {/* </Link> */}
              {/* <Link href="https://www.facebook.com/qurbonovp" legacyBehavior>
                {/* <FaFacebookF size="20" /> */}
              {/* <a target="_blank">
                  <SiFacebook size={20} />
                </a> */}
              {/* <Image src="/facebook.png" alt="" width={24} height={24} /> */}
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// import { motion, useInView, useScroll } from "framer-motion";

// export default function Home() {
//   return (
//
//   );
// }
