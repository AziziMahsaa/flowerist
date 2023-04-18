import Image from "next/image";
import React, { useState } from "react";
function Cardoffer(props) {
  const [active, setActive] = useState(false);
  const [heartColorChange, setHeartColorChange] = useState(false);
  const item = props.item;
  const heart = props.heart;
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div
      className="basis-[23%] flex-grow m-2 flex-col shadow shadow-gray-500/10 rounded-xl overflow-hidden "
      key={item.id}
    >
      <div className="relative">
        <div className="w-full rounded-t-xl h-[250px] overflow-hidden">
          <Image
            className="w-full rounded-t-xl h-[250px] hover:scale-105 object-bottom object-cover ease-in-out duration-500 "
            src={item.imgsrc}
            alt="Picture of planet"
            width={280}
            height={250}
          />
        </div>
        <button
          onClick={() => {
            setHeartColorChange(!heartColorChange);
          }}
          className="h-[32px] w-[32px] flex text-center  items-center bg-white  justify-center m-3 font-thin rounded-full ease-in-out duration-400  text-2xl absolute top-0 right-0 "
        >
          {heartColorChange ? "💚" : "♡"}
        </button>
      </div>

      <div className="flex my-5 justify-around ">
        <div className="flex flex-col">
          <span className="h-[28px] font-semibold text-green-800">
            {item.label}
          </span>
          <div>
            <span className="text-xs">(${item.prevprice})</span>
            <span className="before:text-green-800 ease-in-out duration-400 before:content-['$'] text-xs text-green-800">
              {item.price}
            </span>
          </div>
        </div>
        <button
          onClick={handleClick}
          className={
            "h-[33px] rounded-sm w-[98px] border  text-xs " +
            (active ? "bg-green-800 text-white" : "bg-white text-green-800")
          }
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Cardoffer;
