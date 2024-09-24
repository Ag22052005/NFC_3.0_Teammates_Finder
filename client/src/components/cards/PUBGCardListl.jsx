import React, { useEffect, useState } from "react";
import PUBGCards from "./PUBGCards";
import axios from "axios";
function PUBGCardList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      axios.get("http://localhost:5000/api/games/pubg").then((res) => {
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
        <PUBGCards key={index} user={user} />
      ))}
    </ul>
  );
}

export default PUBGCardList;
