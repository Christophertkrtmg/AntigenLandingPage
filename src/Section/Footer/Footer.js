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
    <div className={className.mainContainer}>
      <img src={bgFooter} alt="" />
      <div className={className.dataContainer}>
        <div className={className.leftGG}>
          <img className="h-1/5" src={ggAntigenLogo} alt="" />
          <div className="font-face-AA tracking-wide h-4/5">
            <div>A product by</div>
            <img className="h-3/4" src={ggSpinLogo} alt="" />
            <div>Going Genius</div>
          </div>
        </div>
        <div className={className.social}>
          <div className={className.socialTitle}>Keep Connected</div>
          <div className={className.socialOptions}>
            <a href="https://www.facebook.com/kriztkrtmg" target="blank">
              <div className={className.optionTitle}>
                <img className="h-7 w-7 object-cover" src={PortalIcon} alt="" />
                <div className="ml-2">GG Portal</div>
              </div>
            </a>

            <a href="https://www.facebook.com/kriztkrtmg" target="blank">
              <div className={className.optionTitle}>
                <FacebookIcon />
                <div className="ml-2">Like us on Facebook</div>
              </div>
            </a>
            <a href="https://www.facebook.com/kriztkrtmg" target="blank">
              <div className={className.optionTitle}>
                <InstagramIcon />
                <div className="ml-2">Follow us on Instagram</div>
              </div>
            </a>
          </div>
        </div>
        <div className={className.right}>
          <div className={className.rightTitle}>Contact Information</div>
          <div className={className.contactOptions}>
            <div className={className.contactOptionTitle}>
              <HomeIcon />
              <div className="ml-2">Full details of location including all</div>
            </div>
            <div className={className.contactOptionTitle}>
              <CallIcon />
              <div className="ml-2">+977-9841000000</div>
            </div>
            <div className={className.contactOptionTitle}>
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

const className = {
  mainContainer: "flex flex-col",
  dataContainer:
    "cursor-default bg-gradient-to-b from-black via-white to-white h-full flex flex-col justify-around py-20 md:flex-row items-center",
  leftGG: "h-60 w-80 m-3 flex flex-col items-center justify-center",
  social: "h-60 w-80 m-3 flex flex-col justify-center items-center",
  socialTitle: "font-face-AA text-xl",
  socialOptions: "ml-1.5 mt-4 flex-flex-col justify-between cursor-pointer",
  optionTitle:
    "flex items-center tracking-tight font-medium hover:bg-gray-500 p-1 rounded",
  right: "h-60 w-80 m-3 flex flex-col justify-center items-center",
  rightTitle: "font-face-AA text-lg",
  contactOptions:
    "mt-2 flex flex-col justify-between items-center tracking-tight font-medium",
  contactOptionTitle: "flex items-center tracking-tight font-medium mt-2",
};
