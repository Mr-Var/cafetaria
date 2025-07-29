import React, { useState } from 'react';

const NUM_ROWS = 3;
const NUM_COLS = 4;

export default function Cafetaria() {
  const [seats, setSeats] = useState(Array(NUM_ROWS * NUM_COLS).fill(false));

  const toggleSeat = (index) => {
    const updated = [...seats];
    updated[index] = !updated[index];
    setSeats(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">🍽️ Cafetaria Seat Booking</h1>

      <div className="grid grid-cols-4 gap-4">
        {seats.map((booked, index) => (
          <button
            key={index}
            onClick={() => toggleSeat(index)}
            className={`w-16 h-16 rounded-2xl text-white font-bold shadow-md transition-colors duration-200 ${
              booked ? 'bg-red-500' : 'bg-green-500 hover:bg-green-600'
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-gray-700">Green = Available, Red = Booked</p>
    </div>
  );
}
