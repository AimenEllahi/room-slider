import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Slider({ onNext, onPrev }) {
  return (
    <div>
      <div
        className="border bg-white flex justify-center items-center h-[40px] w-[40px] rounded-full absolute top-1/2 left-10 transform -translate-y-1/2 cursor-pointer"
        onClick={onPrev}
      >
        <IoIosArrowBack className="text-black text-2xl" />
      </div>
      <div
        className="border bg-white flex justify-center items-center h-[40px] w-[40px] rounded-full absolute top-1/2 right-10 transform -translate-y-1/2 cursor-pointer"
        onClick={onNext}
      >
        <IoIosArrowForward className="text-black text-2xl" />
      </div>
    </div>
  );
}
