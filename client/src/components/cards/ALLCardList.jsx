import React, { useEffect, useState } from "react";
import axios from "axios";
import { get } from "mongoose";
import { useAuthContext } from "../../context/AuthContext";
import ALLCard from "./ALLCard";
function ALLCardList() {
  const { authToken } = useAuthContext();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getMatchMaking = async () => {
      const res = await fetch("http://localhost:5000/api/users/match-making", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken,
        },
      });
      const data = await res.json();
      setUsers(data);
    };

    getMatchMaking();
  }, []);
  return (
    <ul className=" flex flex-wrap items-center gap-3">
      {users.map((user, index) => (
        <ALLCard key={index} user={user} />
      ))}
    </ul>
  );
}

export default ALLCardList;
