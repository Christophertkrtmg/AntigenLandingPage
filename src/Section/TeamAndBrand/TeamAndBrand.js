import React from "react";
import Profile from "../../Component/Profile";
import ggSpinLogo from "../../assets/Images/ggSpinLogo.gif";

function TeamAndBrand() {
  return (
    <div>
      <div
        className={className.introBanner}
        style={{
          backgroundImage: `url(
            "https://images.adsttc.com/media/images/5bdc/8e5e/f197/ccb4/4f00/0245/slideshow/RA14_Alexander_Schonberg_Old_harburg_bridge_DE.jpg?1541181016"
          )`,
        }}
      >
        <div className="flex items-center flex-col md:flex-row">
          <img className={className.bannerImage} src={ggSpinLogo} alt="" />
          <div className={className.bannerDescription}>
            <div className={className.bannerGG}>Going Genius</div>
            <div className={className.bannerSubtitle}>
              <div className={className.notMe}>Not Me</div>
              <div className={className.butUs}>But Us</div>
            </div>
          </div>
        </div>
      </div>

      <div className={className.teamTitle}>Our Teams</div>
      <div className="flex flex-wrap my-5 justify-center">
        <Profile
          name="FirstName LastName"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FuEJbKwDdaz1h387130xmYkAIQbZpahhbQ&usqp=CAU"
          title="C.E.O Director"
        />
        <Profile
          name="FirstName LastName"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdG8WdDmNUR5cZJ7AnamMSa87IZjNksRwLfA&usqp=CAU"
          title="managing Director"
        />
        <Profile
          name="FirstName LastName"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU"
          title="senior fullstack developer"
        />
        <Profile
          name="FirstName LastName"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUkk26hu-ZVWB_0EJ15aPH8fF8D1metX4B8yD2u0QlhJbACuEvW-tDTAH0y6sBBoAHOXE&usqp=CAU"
          title="frontend developer"
        />
        <Profile
          name="FirstName LastName"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXqQt1AvNLUWt3Jh-ORA6KDBCgqEs2v5Nwg&usqp=CAU"
          title="data analyst"
        />
        <Profile
          name="FirstName LastName"
          image="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3R1YmJsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          title="mobile developer"
        />
        <Profile
          name="FirstName LastName"
          image="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="frontend trainee"
        />
      </div>
    </div>
  );
}

export default TeamAndBrand;

const className = {
  introBanner:
    "flex flex-col items-center justify-center bg-fixed bg-no-repeat bg-cover bg-center",
  bannerImage: "h-80 w-80",
  bannerDescription: "flex flex-col mt-10 items-center",
  bannerGG:
    "font-face-AA text-4xl text-blue-200 bg-gradient-to-r from-red-700 to-blue-900 p-2 rounded-xl",
  bannerSubtitle: "font-face-AA flex text-xl justify-center items-center mt-2",
  notMe: "line-through text-2xl",
  butUs: "text-white ml-2 text-2xl",
  teamTitle: "font-face-AA mt-10 tracking-wide text-center text-3xl",
};
