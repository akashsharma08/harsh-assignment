import React from "react";
import arrow from "../assets/arrow.svg";

const Ad = () => {
  return (
    <div className="w-full h-[46px] px-[110px] py-3.5 bg-black justify-center items-center gap-2 inline-flex">
      <div className="w-[486px] self-stretch justify-center items-center gap-2 flex">
        <div className="w-[310px] h-[18px] text-white text-opacity-60 text-sm font-normal font-['DM Sans']">
          This page is included in a free SaaS Website Kit.
        </div>
        <div className="justify-start items-center gap-1 flex">
          <div className="text-white text-sm font-normal font-['DM Sans']">
            View the complete Kit
          </div>
          <img src={arrow} className="w-4 bg-white" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Ad;
