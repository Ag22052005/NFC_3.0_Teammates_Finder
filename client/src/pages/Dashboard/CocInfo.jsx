import React from 'react'
import { delay, easeIn, easeInOut, motion, transform } from "framer-motion";
import { scales } from "chart.js";
import { FaUsers } from "react-icons/fa6";
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
    transition: {
      type: "spring",
      delay: i * 0.5,
      stiffness: 150,
      damping: 30,
    },
  }),
  hidden: {
    opacity: 0,
    x: 10000,
  },
};





const CocInfo = ({ trophyHistory, playerName }) => {
  console.log('trophyHistory', trophyHistory);
  console.log('playerName', playerName);
  const data = {
    labels: trophyHistory.map((item, index) =>  item.date),
    datasets: [
      {
        label: "Performance",
        data: trophyHistory.map((item, index) =>  item.highestTrophies),
        fill: false,
        backgroundColor: "#CB964D",
        borderColor: "#CB964D",
      },
    ],
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: easeInOut }}
      className="bg-[#21222D] py-10 rounded-lg w-[75rem] h-auto"
    >
      <h2 className="text-3xl font-semibold ml-20 pb-5">Clash of Clans Analytics</h2>
      <motion.div className=" gap-x-5 flex flex-col items-center justify-center p-5 text-3xl text-center ">
        <motion.div
          variants={variants}
          custom={0}
          animate="visible"
          initial="hidden"
          className="flex flex-col gap-y-3 bg-[#171821] rounded-lg justify-center items-center w-80 p-2"
        >
          <div className="stat place-items-center">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-[#CB964D] " />
            </div>
            <div className="stat-title">Player Name</div>
            <div className="stat-value text-[#CB964D]">{playerName}</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
          className="bg-[#21222D] py-10 rounded-lg mx-5 w-[90%]"
        >
          <h2 className="text-3xl font-semibold ml-10 pb-5">
             Trophies
          </h2>
          <div className="flex items-center justify-center p-5 text-3xl text-center">
            <Line data={data} height={"40rem"} width={"40rem"} />
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default CocInfo

