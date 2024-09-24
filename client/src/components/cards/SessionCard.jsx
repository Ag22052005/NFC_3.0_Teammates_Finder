import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SessionCards = ({ session }) => {
  console.log(session.sessionMembers);

  return (
    <motion.li
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-[24%] min-h-52 border-2 list-none rounded-lg p-4 bg-gray-900 text-white shadow-lg hover:shadow-cyan-500/50"
    >
      <div className="header flex justify-between items-center w-[96%] my-2 m-auto cursor-pointer">
        <p className="name flex flex-col text-[1.5rem] font-bold text-cyan-400 tracking-wide">
          {session.sessionName}
        </p>
        <Link to={'/session-chat'} className="border-2 p-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-500 transition-all duration-300">
          Join
        </Link>
      </div>

      <hr className="text-cyan-100 w-[90%] m-auto my-2" />

      <div className="details w-[90%] m-auto text-sm space-y-2">
        <h4 className="text-cyan-300">
          <span className="font-bold">Game:</span> {session.gameName}
        </h4>
        <h4 className="text-cyan-300">
          <span className="font-bold">Time:</span> {session.sessionTime}
        </h4>
        <h4 className="text-cyan-300">
          <span className="font-bold">Date:</span> {session.sessionDate.slice(0, 10)}
        </h4>
        <h4 className="text-cyan-300">
          <span className="font-bold">Status:</span> {`${session.sessionMembers?.length || 0}/${session.sessionLimit}`}
        </h4>
        <h4 className="text-cyan-300">
          <span className="font-bold">Type:</span> {session.sessionType}
        </h4>
      </div>
    </motion.li>
  );
};

export default SessionCards;
