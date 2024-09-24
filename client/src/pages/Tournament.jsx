import React from 'react';
import tournamentData from '../../../data/Tournamentdata';

function Tournament() {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-black to-purple-900 min-h-screen p-8">
      <h1 className='text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-8'>
        Tournaments
      </h1>
      {Object.keys(tournamentData).map((tableKey, index) => (
        <div key={index} className="table-container bg-gradient-to-br from-gray-800 via-black to-gray-800 p-6 mb-10 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
          {/* <h2 className='text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500'>{tableKey}</h2> */}
          <table className='w-full bg-transparent'>
            <thead>
              <tr>
                {tournamentData[tableKey][0].map((header, headerIndex) => (
                  <th key={headerIndex} className='text-lg text-left p-4 text-white bg-opacity-75 bg-black rounded-lg'>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tournamentData[tableKey].slice(1).map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transform transition-colors duration-200">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className='p-4 text-white border-b border-gray-700'>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Tournament;
