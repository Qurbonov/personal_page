import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/me.png" alt="" fill className="object-contain" />
      </div>
    </div>
    // <main className="flex flex-col items-center justify-between ">

    //    <Image src="/me.png" width={340} height={240} className="rounded-full p-5"/>
    // </main>
  );
}
