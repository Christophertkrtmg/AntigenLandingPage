import React from "react";
import "./profile.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Profile({ name, image, title }) {
  return (
    <div className={className.card}>
      <img src={image} alt="" className={className.photo} />
      <div className={className.leftSlide}>
        <div className={className.leftContainer}>
          <a
            className={className.linkedIn}
            href="https://www.facebook.com/kriztkrtmg"
            target="blank"
          >
            <LinkedInIcon />
          </a>
          <a
            className={className.gitHub}
            href="https://www.facebook.com/kriztkrtmg"
            target="blank"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className={className.bottomSlide}>
        <div className={className.bottomContainer}>
          <div className="flex">{name}</div>
          <div className="text-xs font-bold">{title}</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

const className = {
  card: "profileContainer",
  photo: "block w-full h-full object-cover",
  leftSlide:
    "socialOverlay absolute bottom-0 left-0 right-0 bg-black overflow-hidden w-0 h-full transition-all duration-300 ease-in-out opacity-80",
  leftContainer:
    "h-5/6 flex flex-col cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap",
  linkedIn: "mb-2 text-blue-500 hover:text-white",
  gitHub: "mb-2 text-gray-400 hover:text-white",
  bottomSlide:
    "profileOverlay absolute bottom-0 left-1/5 right-0 bg-black overflow-hidden w-4/5 h-0 transition-all duration-300 ease-in-out opacity-80",
  bottomContainer:
    "overlayContent flex flex-col text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap",
};
