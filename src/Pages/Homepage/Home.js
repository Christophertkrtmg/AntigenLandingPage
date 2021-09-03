import React from "react";
import ProblemAndUs from "../../Section/FirstContainer/ProblemAndUs";
import Nav from "../../Section/Navbar/Nav";
import TeamAndBrand from "../../Section/TeamAndBrand/TeamAndBrand";
import Footer from "../../Section/Footer/Footer";
import "./home.css";
import Guide from "../../Section/UserGuide/Guide";

function Home() {
  return (
    <div>
      <Nav />
      <ProblemAndUs />
      <Guide />
      <TeamAndBrand />
      <Footer />
    </div>
  );
}

export default Home;
