import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import styled from "styled-components";

function GuideParallax({
  guideImage,
  guideTitle,
  guideDescription,
  guideVideo,
}) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ParallaxContainer>
      <div
        className={className.parallaxImg}
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1549106765-3d312a9425e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80")`,
        }}
      >
        <div
          className={className.guideLeftContainer}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            className={className.guideLeftImage}
            src={guideImage}
            alt="guideimage"
          />
          <div
            className={className.guideLeftDesc}
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            <div className="text-lg font-medium my-2">{guideTitle}</div>
            <div className="max-w-xs text-center">{guideDescription}</div>
          </div>
        </div>
        <div
          className={className.guideRight}
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img className={className.guideMobileImg} src={guideVideo} alt="" />
        </div>
      </div>
    </ParallaxContainer>
  );
}

export default GuideParallax;

const className = {
  parallaxImg:
    "h-full w-full flex flex-col bg-fixed bg-center bg-no-repeat bg-cover md:flex-row",
  guideLeftContainer:
    "h-full w-full flex items-center flex-col justify-center my-5",
  guideLeftImage: "h-60 w-60 object-cover rounded-full",
  guideLeftDesc: "flex flex-col items-center",
  guideRight: "h-full w-full flex justify-center items-center",
  guideMobileImg: "h-full object-contain",
};

const ParallaxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 768px) {
    height: 500px;
  }
`;
