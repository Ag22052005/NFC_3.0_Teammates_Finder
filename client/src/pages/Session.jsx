import React, { useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import SessionCard from "./../components/cards/SessionCard";
import SessionForm from "./SessionForm";
import { useState } from "react";
import axios from "axios";
function Session() {
  const [form, setForm] = useState(false);
  const [sessions,setSesions] = useState([])
  useEffect(()=>{
    try {
      axios.get('http://localhost:5000/api/sessions').then((res)=>{
        
        console.log(res.data)
        setSesions(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  },[])
  return (
    <div className="bg-black p-4">
      <SessionForm className="m-auto z-50" form={form} setForm={setForm} />

      <div className="sessionHeader w-full text-center mb-8 px-4">
        Latest Sessions
        <span className="float-end " onClick={() => setForm(!form)}>
          <IoMdAdd color="green" className="w-12 text-2xl" />
        </span>
      </div>
      <div className="w-full flex flex-wrap gap-3">
        {
          sessions.map((session)=><SessionCard key={session._id} session={session}></SessionCard>)}
      </div>
    </div>
  );
}

export default Session;
