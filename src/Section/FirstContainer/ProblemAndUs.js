import React from "react";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Android";

function ProblemAndUs() {
  return (
    <div
      className="w-full flex flex-col relative"
      style={{ height: `calc(100vh - 64px)` }}
    >
      <img
        className="h-full w-full object-cover"
        src="https://valleyoakpediatrics.com/wp-content/uploads/2020/10/download.png"
        alt=""
      />
      <div className="flex flex-col justify-center cursor-pointer mt-5 absolute top-10 sm:top-1/4 left-10 right-10 xl:left-60">
        <div className="text-3xl md:text-4xl xl:text-5xl text-white max-w-sm">
          GG-Antigen, Download app now...
        </div>
        <div className=" text-white max-w-sm mt-10 text-sm sm:text-base">
          Let's fight covid-19 together. Everything you need, we're here - self
          covid test, digital vaccine identity, and more...
        </div>
        <div className="flex flex-col mt-10 sm:flex-row items-start">
          <button className="cursor-pointer flex items-center p-1.5 bg-gray-500 text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-gray-200 hover:opacity-90">
            <AppleIcon fontSize="large" />
            <div className="flex flex-col ml-1 items-start tracking-tighter">
              <div className="text-xs">Download on the</div>
              <div className="text-lg">Apple Store</div>
            </div>
          </button>
          <button className="cursor-pointer mt-3 sm:mt-0 sm:ml-3 flex items-center p-1.5 bg-gray-500 text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-gray-200 hover:opacity-90">
            <AndroidIcon fontSize="large" />
            <div className="flex flex-col ml-1 items-start tracking-tighter">
              <div className="text-xs">Get it on</div>
              <div className="text-lg ">Google Play</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProblemAndUs;
