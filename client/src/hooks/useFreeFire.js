import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

function useGetFreeFireInfo() {
  const [loading, setLoading] = useState(false);
  const [freeFireInfo, setFreeFireInfo] = useState([]);

  const getFreeFireInfo = async (playerId) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://free-ff-api-src-5plp.onrender.com/api/v1/account?region=IND&uid=${playerId}`
      );
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setFreeFireInfo(data);
      return data;
    } catch (error) {
      toast.error(error.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, getFreeFireInfo, freeFireInfo };
}

export default useGetFreeFireInfo;
