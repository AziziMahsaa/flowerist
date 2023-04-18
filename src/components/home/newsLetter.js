import React from "react";

function NewsLetter() {
  return (
    <div className="w-full h-[350px] bg-bggarden  my-10  items-center px-20 flex flex-row">
      <span className=" w-1/2 text-3xl text-white font-semibold text-left ">
        Enter your email address for our
        <br /> Mailing Promo or other interesting <br />
        Things
      </span>
      <div className="flex w-1/2 gap-5">
        <div className=" px-3 w-full border backdrop-blur-sm rounded-md ">
          <input
            type="text"
            placeholder="Enter your email"
            className=" w-full h-[45px] bg-transparent text-white focus:ring-transparent outline-none"
          />
        </div>
        <button className="w-[168px] hover hover:border-2 rounded-md  h-[45px]  bg-green-900 text-sm text-white ">
          Submit
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
