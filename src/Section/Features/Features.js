import React, { useState } from "react";
import FeatureContent from "../../Component/FeatureContent";

function Features() {
  const [playScreen, setPlayScreen] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Z4-z6kpPB74ZQxsC4RehHRZ6qh0aWkdljw&usqp=CAU"
  );

  return (
    <>
      <div className={className.parallax}></div>
      <div className={className.mainContainer}>
        <div className={className.leftAndCenter}>
          <div className={className.leftSide}>
            <FeatureContent
              setPlayScreen={setPlayScreen}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf6942gPJt5x4HF8PROwQepAuJNkXDUul7vA&usqp=CAU"
              title="Blood Bank"
              description="Blood related features where you can do some works on blood donation and so on"
            />
            <FeatureContent
              setPlayScreen={setPlayScreen}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9hyBJavYDQHuA9FNSGelK8ES02qwetMp-w&usqp=CAU"
              title="Self Test"
              description="Self test for covid with some questions and answers"
            />
            <FeatureContent
              setPlayScreen={setPlayScreen}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR6JUJLTIJgoV6mbGvpQ0777N4LiaB528oeQ&usqp=CAU"
              title="Breathing Exercise"
              description="A simple features about breathing exercise in a daily time to time basis"
            />
          </div>
          <div className={className.centerSide}>
            <div className={className.ourFeature}>User guide</div>
            <div style={{ height: "500px", width: "300px", margin: "20px" }}>
              <img
                className="h-full w-full object-cover"
                src={playScreen}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={className.rightSide}>
          <FeatureContent
            setPlayScreen={setPlayScreen}
            image="https://newsfeed.org/wp-content/uploads/media-3683580_1920.jpg"
            title="Panic Situation"
            description="A information to us whether user is in panic situation, we'll help you"
          />
          <FeatureContent
            setPlayScreen={setPlayScreen}
            image="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2019Q4/feature-driven-development/feature-driven-development-header.png"
            title="Feature5"
            description="Small description of feature, Small description of feature, Small description of feature, Small description of feature, "
          />
          <FeatureContent
            setPlayScreen={setPlayScreen}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvNFA3z83-V3Lm1LaPUHJDFMwRbgGfbwmJQ&usqp=CAU"
            title="Feature6"
            description="feature6, adss asjnaw asienaa fgitna sskana sksnr aana aansint aaksnignana aansngng nass rnaiq fnaa"
          />
        </div>
      </div>
    </>
  );
}

export default Features;

const className = {
  mainContainer:
    "h-full flex justify-center items-center flex-col md:flex-row px-5 py-10",
  leftAndCenter: "flex justify-between items-center",
  leftSide: "flex flex-col justify-center items-center",
  centerSide: "flex flex-col items-center",
  ourFeature: "font-semibold text-4xl capitalize tracking-tighter text-black",
  rightSide:
    "flex justify-center items-center md:flex-col flex-wrap lg:justify-between",
};
