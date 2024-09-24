import React from "react";
import { FaUsers } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import {
  MdOutlineSupervisedUserCircle,
  MdSupervisorAccount,
} from "react-icons/md";
import { FaLevelUpAlt } from "react-icons/fa";
import { GiDeathSkull } from "react-icons/gi";
import { CgGames } from "react-icons/cg";
import { delay, easeIn, easeInOut, motion, transform } from "framer-motion";
import { scales } from "chart.js";
import { Chart, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend); 

const variants = {
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition:{
      type:"spring",
      delay:i*0.5,
      stiffness:150,
      damping:30,

    },
  }),
  hidden: {
    opacity: 0,
    x: 10000,
  },
};

const FreeFireInfo = ({data}) => {
  console.log(data);
  const dataPubg = {
    labels: data.kills_per_match.map((kill, index) => "Match " + (index + 1)),
    datasets: [
      {
        label: "Performance",
        data: data.kills_per_match,
        fill: false,
        backgroundColor: "#CB964D",
        borderColor: "#CB964D",
      },
    ],
  };

  return (
    <div>
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: easeInOut }}

      className="bg-[#21222D] py-10 rounded-lg mx-5 w-[70rem] h-auto "
    >
      <h2 className="text-3xl font-semibold ml-10 pb-5">FreeFire Analytics</h2>
      <motion.div className=" gap-x-5 flex items-center justify-center p-5 text-3xl text-center ">
        <motion.div
          variants={variants}
          custom={0}
          animate="visible"
          initial="hidden"
          className="flex flex-col gap-y-3 bg-[#171821] rounded-lg justify-center items-center w-64 p-2"
        >
          <div className="stat place-items-center">
            <div className="stat-figure text-secondary">
              <GiDeathSkull className="text-[#CB964D] " />
            </div>
            <div className="stat-title">KD Ratio</div>
            <div className="stat-value text-[#CB964D]">{data.kd_ratio}</div>
          </div>
        </motion.div>

        <motion.div 
        variants={variants}
        custom={1}
        animate="visible"
        initial="hidden"
        className="flex flex-col gap-y-3 bg-[#171821] rounded-lg justify-center items-center w-72 p-2">
          <div className="stat place-items-center">
          <div className="stat-figure text-secondary">
              <FaLevelUpAlt className="text-green-500 text-4xl" />
            </div>
            <div className="stat-title">Level</div>
            <div className="stat-value text-green-500">{data.level}</div>
          </div>
        </motion.div>

        <motion.div 
        variants={variants}
        custom={2}
        animate="visible"
        initial="hidden"
        className="flex flex-col gap-y-3 bg-[#171821] rounded-lg justify-center items-center w-64 p-2">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Rank</div>
            <div className="stat-value text-secondary">{data.rank}</div>
          </div>
        </motion.div>
        
      </motion.div>
      <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
          className="bg-[#21222D] py-10 rounded-lg mx-5 w-[90%]"
        >
          <h2 className="text-3xl font-semibold ml-10 pb-5">
             Summary
          </h2>
          <div className="flex items-center justify-center p-5 text-3xl text-center">
            <Line data={dataPubg} height={"40rem"} width={"40rem"} />
          </div>
        </motion.div>
    </motion.div>
    </div>
  )
}

export default FreeFireInfo;






