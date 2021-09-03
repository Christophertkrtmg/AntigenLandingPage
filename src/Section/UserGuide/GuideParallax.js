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
        className="h-full w-full flex flex-col bg-fixed bg-center bg-no-repeat bg-cover md:flex-row"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1549106765-3d312a9425e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80")`,
        }}
      >
        <div
          className="h-full w-full flex items-center flex-col justify-center my-5"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            className="h-60 w-60 object-cover rounded-full"
            src={guideImage}
            alt="guideimage"
          />
          <div
            className="flex flex-col items-center"
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            <div className="text-lg font-medium my-2">{guideTitle}</div>
            <div className="max-w-xs text-center">{guideDescription}</div>
          </div>
        </div>
        <div
          className="h-full w-full flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <img className="h-full object-contain" src={guideVideo} alt="" />
        </div>
      </div>
    </ParallaxContainer>
  );
}

export default GuideParallax;

const ParallaxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  height: 100%;

  @media only screen and (min-width: 768px) {
    height: 500px;
  }
`;
