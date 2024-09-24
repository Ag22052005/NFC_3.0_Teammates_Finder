import React from "react";
import { NavLink } from "react-router-dom";
import backgroundImage from "../assets/images/LandingPage/landingPage.jpg";

const LandingPage = () => {
  return (
    <div className="bg-slate-900">
      <div className=" bg-transparent h-screen w-auto font-mono flex overflow-hidden">
        <div className="flex flex-col text-white justify-center bg-slate-900 h-screen font-mono w-[50%]">
          <div className="flex flex-col h-auto w-auto m-2 p-2 bg-transparent">
            <h1 className="text-5xl font-bold m-2 p-2 text-purple-500">
              GameSquadron
            </h1>
            <h2 className="m-2 p-2 text-justify">
              Find your perfect gaming squad and elevate your play to new
              heights. Our platform connects you with dedicated, skilled
              teammates ready to take on competitive multiplayer challenges.
              Forge strong alliances, strategize together, and dominate the
              gaming world with a team that's as passionate and driven as you
              are
            </h2>
          </div>
          <div className="flex m-2 p-2 w-auto bg-transparent justify-start text-xl">
            <NavLink to={"/signup"}>
              <button className="w-56 m-2 p-2 border-2 border-purple-500 bg-transparent hover:text-black hover:bg-purple-500">
                Create Account
              </button>
            </NavLink>
            <NavLink to={"/login"}>
              <button className="w-56 m-2 p-2 border-2 border-purple-500 bg-transparent hover:text-black hover:bg-purple-500">
                Login
              </button>
            </NavLink>
          </div>
        </div>
        <img
          src={backgroundImage}
          alt="Background"
          className="h-screen w-[50%] object-cover object-center"
        />
      </div>
    </div>
  );
};

export default LandingPage;
