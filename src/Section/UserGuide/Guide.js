import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GuideParallax from "./GuideParallax";
import DownloadNow from "./DownloadNow";

function Guide() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col items-center my-10 h-full">
      <div
        className="text-2xl font-semibold uppercase mb-10 text-center md:text-4xl"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        What it GG-Antigen? Let us show you!
      </div>
      <GuideParallax
        guideImage="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
        guideTitle="No need to carry vaccination paper"
        guideDescription="Now you don't need to carry your vaccination paper. You can simple take a picture and store in this app, so that it will be registered and confirmed by government..."
        guideVideo="https://freesvg.org/img/generic_edge_android_phone_device.png"
      />
      <GuideParallax
        guideImage="https://www.vedalab.com/wp-content/uploads/2021/04/VEDA_COVID-19_GB_OTC_RVB-scaled.jpg"
        guideTitle="Self test of covid"
        guideDescription="Now you can test for a covid from wherever you are, basic survey to breathing exercise and more"
        guideVideo="https://freesvg.org/img/generic_edge_android_phone_device.png"
      />
      <GuideParallax
        guideImage="https://i1.wp.com/www.texasnepal.com/wp-content/uploads/2013/05/safe-simple.jpg?resize=320%2C320"
        guideTitle="Blood Bank"
        guideDescription="You can donate and call for blood, put your donation status, update it in 6 months interval"
        guideVideo="https://freesvg.org/img/generic_edge_android_phone_device.png"
      />
      <GuideParallax
        guideImage="https://risingnepaldaily.com/banner_image/60ee327e304ad_social-media-opportunities-601bc9d146e00.png"
        guideTitle="Social post from RONB, MOHP, RedCross"
        guideDescription="A continuous update related to covid from a geniune sources like RONB, MOHP, Redcross"
        guideVideo="https://freesvg.org/img/generic_edge_android_phone_device.png"
      />

      <DownloadNow />
    </div>
  );
}

export default Guide;
