import React, { useEffect, useState } from "react";
import FFCards from "./FFCards";
import axios from "axios";
function FFCardList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      axios.get("http://localhost:5000/api/games/ff").then((res) => {
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
        <FFCards key={index} user={user} />
      ))}
    </ul>
  );
}

export default FFCardList;
