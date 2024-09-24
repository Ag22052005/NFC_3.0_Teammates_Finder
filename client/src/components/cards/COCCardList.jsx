import React, { useEffect, useState } from "react";
import COCCard from "./COCCard";
import axios from "axios";
function COCCardList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      axios.get("http://localhost:5000/api/games/coc").then((res) => {
        console.log(res.data[0].players);
        setUsers(res.data[0].players);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ul className=" flex flex-wrap items-center gap-3">
      {users.map((user, index) => (
        <COCCard key={index} user={user} />
      ))}
    </ul>
  );
}

export default COCCardList;
