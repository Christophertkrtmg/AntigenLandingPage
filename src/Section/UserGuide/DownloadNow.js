import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Android";

function DownloadNow() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gray-600 w-full">
      <div
        className="text-2xl sm:text-4xl font-semibold uppercase text-center"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        Are you ready now?
      </div>
      <div className="flex items-center justify-center h-full w-full flex-col my-5 md:flex-row">
        <div className=" font-semibold flex font-serif text-center max-w-sm md:text-2xl">
          We welcome you to join the community. Download app now, get help and
          help the people in need.
        </div>
        <div className="flex flex-col h-full my-5 items-center">
          <img
            className="h-28 w-28 md:h-40 md:w-40"
            src="https://laz-img-cdn.alicdn.com/images/ims-web/TB12bJbXwFY.1VjSZFnXXcFHXXa.png"
            alt=""
          />
          <div className="flex mt-5 flex-col sm:flex-row items-start">
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
    </div>
  );
}

export default DownloadNow;
