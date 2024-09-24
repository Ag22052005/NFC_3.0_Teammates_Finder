import React, { useEffect, useState } from 'react';
import CocInfo from './CocInfo.jsx';
import toast from 'react-hot-toast';
import axios from 'axios';
import { set } from 'mongoose';
const Coc = () => {
  const playerId = "1001";
  const [data, setData] = useState({playerName: '', trophyHistory: []});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/games/coc/${playerId}`);
        const data = res.data;
        // console.log('data', data);  
        setData(data);
      } catch (error) {
        toast.error(error.message);
      }
    };
  
    fetchData();
  }, [playerId]);

  return (
    <div className='text-white border w-auto'>
      <CocInfo playerName={data.playerName} trophyHistory={data.trophyHistory}/>
    </div>
  );
};

export default Coc;
