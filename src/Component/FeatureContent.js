import React from "react";

function FeatureContent({ title, description, image, setPlayScreen }) {
  return (
    <div className={className.featureContainer}>
      <img
        onMouseOver={() => setPlayScreen(image)}
        className={className.img}
        src={image}
        alt="NoImage"
      />
      <div className={className.titleAndDesc}>
        <div className={className.heading}>{title}</div>
        <div className={className.description}>{description}</div>
      </div>
    </div>
  );
}

export default FeatureContent;

const className = {
  featureContainer:
    "flex justify-center items-center bg-gray-300 m-2 p-2 border border-black rounded-lg shadow-md hover:bg-gray-400 h-40 w-52 lg:h-44 lg:w-72 xl:h-52 xl:w-96",
  img: "object-cover rounded-full cursor-pointer h-20 w-20 lg:h-32 lg:w-32 xl:h-40 xl:w-40",
  titleAndDesc: "flex flex-col w-1/2 h-full justify-center ml-2 flex-1",
  heading: "font-bold text-sm lg:text-base xl:text-lg text-indigo-700",
  description:
    "font-serif text-xs italic tracking-tight leading-none lg:tracking-normal xl:text-sm xl:tracking-wide xl:leading-tight",
};
