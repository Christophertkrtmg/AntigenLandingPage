import React, { useState } from "react";
import ggAntigenLogo from "../../assets/Images/ggAntigenLogo.png";

function Nav() {
  const [openQR, setOpenQR] = useState(false);

  const handleMouseOver = () => {
    setOpenQR(true);
  };

  return (
    <div className={className.navbar}>
      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#">
        <img className="h-10 object-contain" src={ggAntigenLogo} alt="" />
      </a>
      <div className={className.right}>
        <div
          className={className.navQR}
          onMouseEnter={handleMouseOver}
          onMouseLeave={() => setOpenQR(false)}
        >
          <img
            className={className.imgQR}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
            alt=""
          />
          <div className={className.getApp}>Get App</div>
          {openQR && (
            <div className={className.scanQR}>
              <div className={className.scanTitle}>
                Scan to download the app
              </div>
              <img
                className={className.scanImgQR}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;

const className = {
  navbar:
    "h-16 px-5 flex justify-between items-center bg-black md:px-10 lg:px-14 xl:px-20 2xl:px-40 sticky top-0 z-10",
  right: "flex items-center cursor-pointer",
  getApp: "font-bold text-lg text-white",
  navMenu: "mr-2 lg:mr-5 ",
  navQR: "flex items-center font-bold relative",
  imgQR: "h-10 object-contain mr-4 bg-gray-300",
  scanQR:
    "absolute right-0 top-full h-60 w-44 p-2 bg-yellow-500 rounded-xl flex items-center justify-center flex-col",
  scanTitle: "text-lg text-center font-normal leading-tight",
  scanImgQR: " mt-2 h-36 w-36 bg-gray-100 rounded-xl bg-gray-300",
};
