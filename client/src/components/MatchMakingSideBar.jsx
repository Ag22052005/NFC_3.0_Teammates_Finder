import React, { useEffect } from "react";
import { useState } from "react";
import ff from "./../assets/gamesLogoImg/ff.png";
import coc from "./../assets/gamesLogoImg/coc.png";
import pubg from "./../assets/gamesLogoImg/pubg.png";
import FFCardList from "./cards/FFCardList";
import PUBGCardList from "./cards/PUBGCardListl";
import COCCardList from "./cards/COCCardList";
import ALLCardList from "./cards/ALLCardList";

const MatchMakingSideBar = () => {
  const games = ["FREEFIRE", "PUBG", "COC"];

  const [currentItem, setCurrentItem] = useState("all");

  return (
    <div className="w-full">
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-[20%] h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-2 border-gray-500 bg-[#171821] shadow-lg"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#171821]">
          <div
            className={`bg-[#34cab6] rounded-md hover:bg-[#00f9d8] text-black`}
          >
            <div
              className="flex items-center p-2 rounded-lg group"
              onClick={() => handleItemClick("Users")}
            >
              <span className="flex-1 ms-3 whitespace-nowrap text-xl">
                Find Here 
              </span>
            </div>
          </div>
          <ul className="mt-2 font-medium text-white">
            <li
              onClick={() => setCurrentItem("all")}
              className={`${
                currentItem === "all"
                  ? " bg-red-400 hover:bg-red-500 text-white"
                  : "hover:bg-gray-800"
              } flex p-2 mt-1 gap-3`}
            >
              <p className="text-xl">All</p>
            </li>
            <li
              onClick={() => setCurrentItem("ff")}
              className={`${
                currentItem === "ff"
                  ? " bg-red-400 hover:bg-red-500 text-white"
                  : "hover:bg-gray-800"
              } flex p-2 mt-1 gap-3`}
            >
              <div>
                <img
                  src={ff}
                  alt=""
                  className="w-[30px] h-[30px] rounded-[50%]"
                />
              </div>
              <p className="text-xl">Free Fire</p>
            </li>
            <li
              onClick={() => setCurrentItem("pubg")}
              className={`${
                currentItem === "pubg"
                  ? " bg-red-400 hover:bg-red-500 text-white"
                  : "hover:bg-gray-800"
              } flex p-2 mt-1 gap-3`}
            >
              <div>
                <img
                  src={pubg}
                  alt=""
                  className="w-[30px] h-[30px] rounded-[50%]"
                />
              </div>
              <p className="text-xl">PUBG</p>
            </li>
            <li
              onClick={() => setCurrentItem("coc")}
              className={`${
                currentItem === "coc"
                  ? " bg-red-400 hover:bg-red-500 text-white"
                  : "hover:bg-gray-800"
              } flex p-2 mt-1 gap-3`}
            >
              <div>
                <img
                  src={coc}
                  alt=""
                  className="w-[30px] h-[30px] rounded-[50%]"
                />
              </div>
              <p className="text-xl">COC</p>
            </li>
          </ul>
        </div>
      </aside>

      <div className="mt-2 ml-[20rem] w-[76%]">
        {currentItem == "ff" ? (
          <FFCardList />
        ) : currentItem == "pubg" ? (
          <PUBGCardList />
        ) : currentItem == "coc" ? (
          <COCCardList />
        ) : (
          <ALLCardList />
        )}
      </div>
    </div>
  );
};

export default MatchMakingSideBar;
