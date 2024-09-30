import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <div>
      <div className="container mx-auto text-end px-5  lg:px-32 ">
        <Link href="/" className="text-green-500 hover:text-white">
          Home
        </Link>
      </div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-4">
        <div className="border-b mb-4">
          <b>Project.</b>
        </div>
        <p className="mb-4">
          <span className="text-blue-400">Uqituvchi.uz</span>, for teachers and
          puples online teaching platform, was created in the pandemic days.
        </p>
        <Image
          src="/certs/1646650170260.png"
          width={250}
          height={250}
          className="block h-auto w-auto rounded-lg object-cover object-center"
          priority={true}
          alt=""
        />
        <div className="pt-4">
          <Link
            target="_blank"
            href="/certs/uqituvchi.uz.pdf"
            className="text-green-400 hover:underline"
          >
            Presentation file. (in Uzbek language)
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-4 ">
        <div className="border-b mb-4">
          <b>Certificates.</b>
        </div>
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src="/certs/Project Management Foundations: Requirements.jpeg"
                width={650}
                height={650}
                className="block h-full w-full rounded-lg object-cover object-center"
                priority={true}
                alt=""
              />
              {/* <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              /> */}
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src="/certs/DevOps Foundations (2016).jpeg"
                width={650}
                height={650}
                className="block h-full w-full rounded-lg object-cover object-center"
                priority={true}
                alt=""
              />
              {/* <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              /> */}
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                src="/certs/arenadata.jpg"
                width={650}
                height={650}
                className="block h-full w-full rounded-lg object-cover object-center"
                priority={true}
                alt=""
              />
              {/* <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              /> */}
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                src="/certs/Become a Full-Stack Web Developer.jpeg"
                width={650}
                height={650}
                className="block h-full w-full rounded-lg object-cover object-center"
                priority={true}
                alt=""
              />
              {/* <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              /> */}
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src="/certs/Learning TypeScript.jpeg"
                width={650}
                height={650}
                className="block h-full w-full rounded-lg object-cover object-center"
                priority={true}
                alt=""
              />
              {/* <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              /> */}
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                src="/certs/Learning SQL Programming.jpeg"
                width={650}
                height={650}
                className="block h-full w-full rounded-lg object-cover object-center"
                alt="gallery"
                priority={true}
                alt=""
              />
              {/* <img
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
