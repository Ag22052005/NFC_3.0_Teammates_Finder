import React, { useEffect, useRef } from "react";
import axios from "axios";

const SessionForm = ({ form, setForm }) => {
  // Refs for form inputs
  const sessionNameRef = useRef(null);
  const gameNameRef = useRef(null);
  const sessionTimeRef = useRef(null);
  const sessionDateRef = useRef(null);
  const sessionLimitRef = useRef(null);
  const sessionTypeRef = useRef(null);

  // Toggle form visibility based on 'form' prop
  useEffect(() => {
    const formPage = document.getElementById('form-page');
    if (form) {
      formPage.style.display = 'block';
    } else {
      formPage.style.display = 'none';
    }
  }, [form]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect data from refs
    const sessionData = {
      sessionName: sessionNameRef.current.value,
      gameName: gameNameRef.current.value,
      sessionTime: sessionTimeRef.current.value,
      sessionDate: sessionDateRef.current.value,
      sessionLimit: parseInt(sessionLimitRef.current.value, 10),
      sessionType: sessionTypeRef.current.value,
    };

    try {
      // Send a POST request to your backend
      await axios.post("http://localhost:5000/api/sessions", sessionData);
      // Handle successful form submission
      alert("Session created successfully!");
      setForm(false); // Close the form
    } catch (error) {
      // Handle errors
      console.error("There was an error creating the session!", error);
      alert("Failed to create session.");
    }
  };

  return (
    <div className="fixed left-[35rem] w-[25rem]" id="form-page">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-md"
      >
        <h2 className="text-2xl font-bold mb-4">Create New Session</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Session Name</label>
          <input
            type="text"
            ref={sessionNameRef}
            placeholder="Example"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Game Name</label>
          <input
            type="text"
            ref={gameNameRef}
            placeholder="Free Fire"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Time</label>
          <input
            type="text"
            ref={sessionTimeRef}
            placeholder="2 PM"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Session Date</label>
          <input
            type="date"
            ref={sessionDateRef}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Session Limit</label>
          <input
            type="number"
            ref={sessionLimitRef}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Session Type</label>
          <input
            type="text"
            ref={sessionTypeRef}
            placeholder="Solo Duo Squad"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="flex justify-evenly">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
          >
            Create Session
          </button>
          <button
            type="button"
            onClick={() => setForm(false)}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Discard Session
          </button>
        </div>
      </form>
    </div>
  );
};

export default SessionForm;
