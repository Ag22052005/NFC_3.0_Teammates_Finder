import React from "react";
import { TbCircleFilled } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import image from "./../../assets/gamesLogoImg/image.png";
import { IoPersonAddSharp } from "react-icons/io5";

const FFCards = ({ user }) => {
  console.log(user)
  return (
    <motion.li
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-[24%] min-h-52 border-2 list-none rounded-lg p-3"
    >
      <div className="header flex justify-between items-center w-[96%] my-2 m-auto cursor-pointer">
        <div className="profile flex justify-start gap-6 items-center">
          <img src={image} className="w-[50px] rounded-[50%] " alt="" />
          <p className="name flex flex-col text-[1.4rem]">
            {user.name}
            <span className="text-[0.8rem]">~{user.username}</span>
          </p>
        </div>
        <IoPersonAddSharp color="lightGreen" className="justify-self-end" />
      </div>

      <hr className="text-cyan-100 w-[90%] m-auto my-2" />
      <div className="details w-[90%] m-auto">
        <h4>UserId : {user.id}</h4>
        <h4>Rank : {user.rank}</h4>
        <h4>KD Ratio : {user.kd_ratio}</h4>
        <h4>Level : {user.level}</h4>
      </div>
      <div className="details w-[90%] m-auto">
        <p className="rating flex items-center gap-2">
          <h5>Rating :</h5>
          <span className="flex gap-1">
            <TbStarFilled color="white" />
            <TbStarFilled color="white" />
            <TbStarFilled color="white" />
            <TbStarFilled color="white" />
          </span>
        </p>
      </div>
    </motion.li>
  );
};

export default FFCards;
