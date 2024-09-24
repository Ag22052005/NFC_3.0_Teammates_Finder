import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function GamePreferenceSkills() {
  const [gameName, setGameName] = useState("");
  const [gameId, setGameId] = useState("");
  const [gameExpertise, setGameExpertise] = useState("");
  const [games, setGames] = useState([]);
  const { authToken } = useAuthContext();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users/game-info", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${authToken}`,
          },
        });

        const data = await res.json();
        if (data.error) {
          throw new Error(data.error || "Failed to fetch games");
        }
        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error.message);
        toast.error(error.message);
      }
    };

    fetchGames();
  }, [authToken]); // Dependency array includes authToken to refetch if token changes

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newGame = { gameName, gameId, gameExpertise };

    try {
      // Send the new game data to the backend
      const res = await fetch("http://localhost:5000/api/users/game-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify(newGame),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      // Add the new game to the local list after successful posting
      setGames([...games, newGame]);

      // Clear the input fields
      setGameName("");
      setGameId("");
      setGameExpertise("");
      toast.success("Game added successfully!");
    } catch (error) {
      console.error("Error adding game:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="game-preference-skills p-6 bg-gray-800 bg-opacity-70 backdrop-blur-md shadow-lg rounded-lg w-[65%] mx-auto">
      <h2 className="text-2xl font-bold text-white mb-4">Game Preference & Skills</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg text-white mb-2">Game Name:</label>
          <input
            type="text"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
            className="border border-gray-500 rounded-lg px-3 py-2 w-full bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg text-white mb-2">Game User Id:</label>
          <input
            type="text"
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
            className="border border-gray-500 rounded-lg px-3 py-2 w-full bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg text-white mb-2">Game Expertise:</label>
          <input
            type="text"
            value={gameExpertise}
            onChange={(e) => setGameExpertise(e.target.value)}
            className="border border-gray-500 rounded-lg px-3 py-2 w-full bg-gray-700 text-white"
          />
        </div>

        <button
          type="submit"
          className="bg-transparent border border-purple-500 text-purple-400 px-4 py-2 rounded-lg hover:bg-purple-400 hover:text-purple-900 transition"
        >
          Add Game
        </button>
      </form>

      {games.length > 0 && (
        <div className="mt-6 border-t border-gray-500 pt-4">
          <h3 className="text-lg font-semibold text-white">Your Games</h3>
          <div className="mt-2 bg-gray-900 bg-opacity-80 backdrop-blur-md p-4 rounded-lg">
            {games.map((game, index) => (
              <div key={index} className="mb-4 flex justify-between">
                <p className="text-gray-300">{game.gameName}</p>
                <p className="text-gray-300">{game.gameId}</p>
                <p className="text-gray-300">{game.gameExpertise}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GamePreferenceSkills;
