import React from "react";
import Image from "next/image";
export const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image
        src="https://links.papareact.com/0fm"
        alt="mayanjs"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-bold">
          Not Sure Where to go? Perfect
        </p>
        <button className="text-blue-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm Flexible
        </button>
      </div>
    </div>
  );
};
