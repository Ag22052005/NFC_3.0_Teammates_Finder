import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Freefire from "./Freefire";
import Coc from "./Coc";
import Pubg from "./pubg";

const DashboardSidebar = () => {
  const [currentItem, setCurrentItem] = useState("Freefire");

  const games = [
    {
      name: "Freefire",
      link: "free-fire",
    },
    {
      name: "PUBG",
      link: "pubg",
    },
    {
      name: "Clash of Clans",
      link: "coc",
    },
  ];

  return (
    <div className="">
      <aside
        id="default-sidebar"
        className="fixed  left-0 z-40 w-64 h-[60%] transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gradient-to-b from-[#171821] to-[#0f1015]">
          <ul className="space-y-2 font-medium">
          <li className="bg-[#b83ab6]"
              >
                <div
                  className={`flex items-center p-2 rounded-lg text-white group `}
                >
                  <span className="ml-3">Games</span>
                </div>
              </li>
            {games.map((game) => (
              <li
                key={game.name}
                className={`${
                  currentItem === game.name
                    ? "bg-[#34cab6] rounded-md hover:bg-[#00f9d8] text-gray-900"
                    : "hover:bg-gray-700"
                }`}
              >
                <div
                  onClick={() => setCurrentItem(game.name)}
                  className={`flex items-center p-2 rounded-lg text-white group ${
                    currentItem === game.name
                      ? "text-[#0f1015]"
                      : "hover:text-[#34cab6]"
                  }`}
                >
                  <span className="ml-3">{game.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="flex-1 ml-64 p-4">
        {currentItem === "Freefire" ? (
          <Freefire />
        ) : currentItem === "PUBG" ? (
          <Pubg />
        ) : (
          <Coc />
        )}
      </div>
    </div>
  );
};

export default DashboardSidebar;
