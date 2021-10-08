import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GuideParallax from "./GuideParallax";
import DownloadNow from "./DownloadNow";
import bloodGif from "../../assets/Images/blood-donation.gif"
import noPaperGif from "../../assets/Images/no-paper.gif"
import covidTestGif from "../../assets/Images/covid-test.gif"
import facebookPostGif from "../../assets/Images/facebook-post.gif"

function Guide() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={className.mainContainer}>
      <div
        className={className.guideTitle}
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        What it GG-Antigen? Let us show you!
      </div>
      <GuideParallax
        guideImage={noPaperGif}
        guideTitle="No need to carry vaccination paper"
        guideDescription="Now you don't need to carry your vaccination paper. You can simple take a picture and store in this app, so that it will be registered and confirmed by government..."
        guideVideo="https://freesvg.org/img/generic_edge_android_phone_device.png"
      />
      <GuideParallax
        guideImage={covidTestGif}
        guideTitle="Self test of covid"
        guideDescription="Now you can test for a covid from wherever you are, basic survey to breathing exercise and more"
        guideVideo="https://freesvg.org/img/generic_edge_android_phone_device.png"
      />
      <GuideParallax
        guideImage={bloodGif}
        guideTitle="Blood Bank"
        guideDescription="You can donate and call for blood, put your donation status, update it in 6 months interval"
        guideVideo="https://freesvg.org/img/generic_edge_android_phone_device.png"
      />
      <GuideParallax
        guideImage={facebookPostGif}
        guideTitle="Social post from RONB, MOHP, RedCross"
        guideDescription="A continuous update related to covid from a geniune sources like RONB, MOHP, Redcross"
        guideVideo="https://freesvg.org/img/generic_edge_android_phone_device.png"
      />

      <DownloadNow />
    </div>
  );
}

export default Guide;

const className = {
  mainContainer: "flex flex-col items-center my-10 h-full",
  guideTitle: "text-2xl font-semibold uppercase mb-10 text-center md:text-4xl",
};