import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/me.png" fill className="object-contain" alt="" />
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center lg:ml-8">
          <h1 className="text-4xl md:text-6xl font-bold sm:text-center">
            The start line!
          </h1>
          <p className="md:text-xl text-center">
            Every morning we come to the start line, brimming with optimism and
            ready to give it our all. We&apos;ll show you the best results
            we&apos;ve ever had!
          </p>
          {/* BUTTONS
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div> */}
          {/* <Image src="/me.png" width={550} height={550} />

        <div className="items-center justify-center border-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque
          fugit nisi veritatis quos dolores voluptatibus voluptate harum rem
          dolore libero nobis reprehenderit autem soluta velit, cum quia
          architecto optio.
        </div> */}
        </div>{" "}
      </div>
    </>
  );
}
