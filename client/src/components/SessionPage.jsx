import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const socket = io('http://localhost:5000');

function SessionPage() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('receiveMessage', (data) => {
      setChat((prevChat) => [...prevChat, data]);
      toast(`${data.username}: ${data.message}`);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && username.trim()) {
      socket.emit('sendMessage', { message, username });
      setMessage('');
    } else {
      toast.error('Please enter both a username and a message');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <ToastContainer />
      <h1 className="text-4xl font-bold mb-8">Real-Time Chat</h1>
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 p-2 w-full rounded-lg bg-gray-700 text-white outline-none"
        />
        <div className="bg-gray-800 p-4 rounded-lg mb-4 max-h-64 overflow-y-auto">
          {chat.map((entry, index) => (
            <div key={index} className="mb-2">
              <strong>{entry.username}:</strong> {entry.message}
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="flex">
          <input
            type="text"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-grow p-2 rounded-lg bg-gray-700 text-white outline-none"
          />
          <button type="submit" className="ml-2 p-2 bg-blue-500 rounded-lg">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default SessionPage;
