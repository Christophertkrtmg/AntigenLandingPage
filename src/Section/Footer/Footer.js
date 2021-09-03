import React from "react";
import bgFooter from "../../assets/Images/bgFooter.png";
import ggAntigenLogo from "../../assets/Images/ggAntigenLogo.png";
import ggSpinLogo from "../../assets/Images/ggSpinLogo.gif";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import HomeIcon from "@material-ui/icons/Home";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import PortalIcon from "../../assets/Images/portal.png";

function Footer() {
  return (
    <div className="flex flex-col">
      <img src={bgFooter} alt="" />
      <div className="cursor-default bg-gradient-to-b from-black via-white to-white h-full flex flex-col justify-around py-20 md:flex-row items-center">
        <div className="h-60 w-80 m-3 flex flex-col items-center justify-center">
          <img className="h-1/5" src={ggAntigenLogo} alt="" />
          <div className="font-face-AA tracking-wide h-4/5">
            <div>A product by</div>
            <img className="h-3/4" src={ggSpinLogo} alt="" />
            <div>Going Genius</div>
          </div>
        </div>
        <div className="h-60 w-80 m-3 flex flex-col justify-center items-center">
          <div className="font-face-AA text-xl">Keep Connected</div>
          <div className="ml-1.5 mt-4 flex-flex-col justify-between cursor-pointer">
            <a href="https://www.facebook.com/kriztkrtmg" target="blank">
              <div className="flex items-center tracking-tight font-medium hover:bg-gray-500 p-1 rounded">
                <img className="h-7 w-7 object-cover" src={PortalIcon} alt="" />
                <div className="ml-2">GG Portal</div>
              </div>
            </a>

            <a href="https://www.facebook.com/kriztkrtmg" target="blank">
              <div className="flex items-center tracking-tight font-medium p-1 hover:bg-gray-500 rounded">
                <FacebookIcon />
                <div className="ml-2">Like us on Facebook</div>
              </div>
            </a>
            <a href="https://www.facebook.com/kriztkrtmg" target="blank">
              <div className="flex items-center tracking-tight font-medium p-1 hover:bg-gray-500 rounded">
                <InstagramIcon />
                <div className="ml-2">Follow us on Instagram</div>
              </div>
            </a>
          </div>
        </div>
        <div className="h-60 w-80 m-3 flex flex-col justify-center items-center">
          <div className="font-face-AA text-lg">Contact Information</div>
          <div className="mt-2 flex flex-col justify-between items-center tracking-tight font-medium">
            <div className="flex items-center justify-center tracking-tight font-medium mt-2">
              <HomeIcon />
              <div className="ml-2">Full details of location including all</div>
            </div>
            <div className="flex items-center tracking-tight font-medium mt-2 cursor-pointer">
              <CallIcon />
              <div className="ml-2">+977-9841000000</div>
            </div>
            <div className="flex items-center tracking-tight font-medium mt-2 cursor-pointer">
              <MailIcon />
              <div className="ml-2">contact@example.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
