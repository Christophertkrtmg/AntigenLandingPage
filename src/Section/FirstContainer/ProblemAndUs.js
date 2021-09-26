import React from "react";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Android";
import Lottie from 'react-lottie';
import animationData from '../../lotties/covid-shield';

function ProblemAndUs() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div
      className="w-full flex relative"
      style={{ height: `calc(100vh - 64px)` }}
    >
      <div className="w-1/2 shadow h-auto flex flex-col justify-center items-center">
        <div className="text-3xl md:text-4xl xl:text-5xl text-gray-600 max-w-sm">
          GG-Antigen, Download app now...
        </div>
        <div className=" text-gray-600 max-w-sm mt-10 text-sm sm:text-base">
          Let's fight covid-19 together. Everything you need, we're here - self
          covid test, digital vaccine identity, and more...
        </div>
        <div className="flex flex-col mt-10 sm:flex-row items-start">
          <button className="cursor-pointer flex items-center px-5 py-2 rounded-full bg-gray-700 text-white transition-all duration-300 ease-in-out hover:bg-gray-900 hover:opacity-90">
            <AppleIcon fontSize="large" />
            <div className="flex flex-col ml-1 items-start tracking-tighter">
              <div className="text-xs">Download on the</div>
              <div className="text-lg">Apple Store</div>
            </div>
          </button>
          <button className="cursor-pointer mt-3 sm:mt-0 sm:ml-3 flex items-center px-5 py-2 shadow rounded-full bg-gray-200 text-black transition-all duration-300 ease-in-out hover:bg-gray-300 hover:opacity-90">
            <AndroidIcon fontSize="large" />
            <div className="flex flex-col ml-2 items-start tracking-tighter">
              <div className="text-xs">Get it on</div>
              <div className="text-lg ">Google Play</div>
            </div>
          </button>
        </div>
      </div>

      <div className="w-1/2 shadow h-auto">
        <div>
          <Lottie
            options={defaultOptions}
            height={550}
            width={550}
          />
        </div>
      </div>
    </div>
  );
}

export default ProblemAndUs;
