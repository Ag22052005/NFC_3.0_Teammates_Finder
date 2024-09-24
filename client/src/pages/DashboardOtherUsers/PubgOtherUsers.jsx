import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import PubgInfo from './PubgInfo';
function Pubg() {
  const playerId = "1028901234";
  const [data, setData] = useState({
    "player_id": 1028901234,
    "player_name": "SonamThakur",
    "real_name": "Sonam Thakur",
    "kd_ratio": 3.4,
    "tier": "Platinum",
    "matches_played": 200,
    "kills_per_match": [
        5,
        6,
        4,
        3,
        5,
        6,
        7,
        4,
        6,
        5
    ]
});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/games/pubg/${playerId}`);
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
      <PubgInfo data={data}/>
    </div>
  );
};



export default Pubg




