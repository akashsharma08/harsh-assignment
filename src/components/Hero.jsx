import React from "react";
import curve from "../assets/curve.png";
import cylinder from "../assets/cylinder.png";
import visual from "../assets/Visual.png";
import icon from "../assets/Icons.svg";


const Hero = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-800 via-[#EAEEFE] to-[#EAEEFE] flex justify-evenly items-center">
      <div className=" w-[520px] gap-10 flex flex-col items-start ">
        <div className="text-md border-2 px-2 py-[2px] border-[#dfdfdf] rounded-xl ">Version 2.0 is here</div>
        <h1 className="text-7xl flex flex-col items-start font-semibold "><span>Pathway to</span> Productivity</h1>
        <p className="w-[450px] text-xl text-left">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>
        <div className=" gap-4 flex justify-between items-center">
          <div className="rounded-lg bg-black text-white px-2 py-1">Get for free</div>
          <span className="font-semibold flex justify-center items-center gap-2">Learn more <img src={icon} alt="" /></span>
        </div>
      </div>
      <div className="relative">
        <img className=" w-[150px] absolute -left-20" src={cylinder} alt="" />
        <img  className=" w-[460px]" src={visual} alt="" />
        <img src={curve} className=" z-10 w-[180px] absolute -right-4 -bottom-20" alt="" />
      </div>
    </div>
  );
};

export default Hero;
