import Offerscard from "@/components/home/offerscard";
import Planetcards from "@/pages/planetcards";
import React from "react";

function Helping() {
  return (
    <div className="flex flex-col my-20 ">
      <div className="flex  flex-row  container mx-auto   items-center justify-between  w-[1200px]">
        <div className="flex justify-center  w-[476px]   text-[36px] font-bold text-green-900">
          <span>
            We Help choose the most <br /> suitable plants for you
          </span>
        </div>
        <div className="  h-[108px]">
          <span className="text-left">
            Our selection includes a wide variety of flowers, from classic roses
            to exotic <br /> orchids, as well as a variety of lush indoor and
            outdoor plants and also offer <br /> unique floral arrangements that
            are perfect for any occasion, whether youre
            <br />
            looking to brighten up your home or send a thoughtful gift.
          </span>
        </div>
      </div>
      <div className="container mx-auto  flex my-10 justify-between  w-[1200px] ">
        <Planetcards />
      </div>
      <div className="flex flex-col gap-6 text-center">
        <span className="font-bold mt-14 text-green-900 text-[36px]">
          What we offer to you
        </span>
        <div className="flex w-[1200px]  flex-wrap container mx-auto  ">
          <Offerscard />
        </div>
      </div>
    </div>
  );
}

export default Helping;
