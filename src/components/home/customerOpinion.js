import Userprofile from "@/components/home/userprofile";
import React from "react";

function CustomerOpinion() {
  return (
    <div className="flex flex-col gap-10 text-center my-10 h-[414-px] w-[1200px] container mx-auto  ">
      <span className="font-bold text-green-900 text-[36px]">
        What do they say about us
      </span>
      <div className="flex flex-row justify-between">
        <Userprofile />
      </div>
    </div>
  );
}

export default CustomerOpinion;
