import Navbar from "@/components/layout/header/navbar";
import { useState } from "react";
import useInterval from "use-interval";
export default function Header() {
  return (
    <div className="h-screen bg-cover" id="wallpaper">
      <div className="bg-gradient-to-b from-darkgreen via-medgreen to-lightgreen  h-screen  w-screen ">
        <Navbar />
        <div className="  text-white   ">
          <div className="  flex flex-col text-center items-center mt-32   gap-10">
            <h1 className="text-6xl  font-semibold">
              Natures Beauty Delivered to You
            </h1>
            <span>
              Natures beauty is just a click away with our online flower and
              plant shop. We offer a <br /> wide variety of flowers that will
              bring a touch of nature to your home!
            </span>
            <div className="flex gap-5">
              <button className="w-[168px] hover hover:border-2   h-[41px] rounded-sm bg-green-900 text-sm text-white ">
                Book Now
              </button>
              <button className="hover hover:border-2  w-[187px] h-[41px] rounded-sm border border-white text-sm text-white ">
                Watch Tv
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
