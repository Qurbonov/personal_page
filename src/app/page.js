import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="w-full flex items-center justify-center h-full">
        <div className="w-9/12 flex flex-col gap-1 lg:flex-row sm:flex-col md:flex-col ">
          <div className="w-full relative">
            <Image
              src="/me.png"
              width={650}
              height={650}
              className="object-cover rounded-full shadow-lg shadow-cyan-500/50 border-4 border-white-500/75"
              priority={true}
              alt=""
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center mt-8 lg:mt-0 md:mt-8">
            <h1 className="text-4xl md:text-6xl font-bold sm:text-center underline decoration-yellow-500">
              The Start line!
            </h1>
            <p className="md:text-xl text-center mt-4 ml-8 lg:mt-12 md:mt-10">
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
          </div>
        </div>
      </div>
    </>
  );
}
