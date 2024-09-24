import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="bg-transparent sticky top-0 z-10 backdrop-blur-md">
      <ul className="flex gap-5 font-mono justify-evenly text-white">
        <li className="border-2 border-transparent m-2 p-2 cursor-pointer">
          <NavLink to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li className="border-2 border-transparent m-2 p-2 cursor-pointer">
          <NavLink to="/matchmaking">
            Matchmaking
          </NavLink>
        </li>
        <li className="border-2 border-transparent m-2 p-2 cursor-pointer">
          <NavLink to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="border-2 border-transparent m-2 p-2 cursor-pointer">
          <NavLink to="/game-sessions">
            Game Sessions
          </NavLink>
        </li>
        <li className="border-2 border-transparent m-2 p-2 cursor-pointer">
          <NavLink to="/community-chat">
            Community Chat
          </NavLink>
        </li>
        <li className="border-2 border-transparent m-2 p-2 cursor-pointer">
          <NavLink to="/upcoming-tournament">
            Upcoming-Tournament
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
