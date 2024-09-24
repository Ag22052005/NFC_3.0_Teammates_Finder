import React from "react";
import { TbCircleFilled } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import image from "./../../assets/gamesLogoImg/image.png";
import { IoPersonAddSharp } from "react-icons/io5";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import {useState }from "react"
import { Link } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";


const ALLCard = ({ user }) => {

  const [request ,setRequest] = useState(false);
  const [like, setLike] = useState(false);

  const numStars = Math.floor(Math.random() * 5) + 1;
  return (
    <motion.li
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-[24%] min-h-80 border-2 list-none rounded-lg p-3"
    >
      <div className="header flex justify-between items-center w-[96%] my-2 m-auto cursor-pointer">
        <Link to={"/dashboard/free-fire"}>
        <div className="profile flex justify-start gap-6 items-center">
          <img src={image} className="w-[50px] rounded-[50%] " alt="" />
          <p className="name flex flex-col text-[1.4rem]">
            {user.fullName}
            <span className="text-[0.8rem]">~{user.username}</span>
          </p>
        </div>
        </Link>
        {
          !request?
          <IoPersonAddSharp color="lightGreen" className="justify-self-end" onClick={()=>setRequest(true)}/>:
          <IoCheckmarkDoneCircleSharp color="lightGreen" className="justify-self-end" />
        }
      </div>

      <hr className="text-cyan-100 w-[90%] m-auto my-2" />
      {user.gameInfo.map((u) => (
        <div className="details w-[90%] m-auto">
          <h4>Game Name : {u.gameName}</h4>
          <h4>Game Expertise : {u.gameExpertise}</h4>
          <hr className="text-cyan-100 w-[20%] m-auto my-2" />
        </div>
      ))}
      <div className="details w-[100%] m-auto">
        <p className="rating flex justify-between gap-2">
          <div className="flex items-center">
          <h5>Rating :</h5>
          <span className="flex gap-1">
            {Array.from({ length: numStars }).map((_, i) => (
              <TbStarFilled key={i} color="white" />
            ))}
          </span>
          </div>
          <div>
            <FaThumbsUp onClick={(e)=>setLike(true)} className={`${like? "text-red-500":""}`}/>
            <h2 className="text-yellow-200">{12}</h2>
          </div>
        </p>
      </div>
    </motion.li>
  );
};

export default ALLCard;
