import React, { useState } from "react";
import "./styles.css";

const Cafetaria = () => {
  const rows = 5;
  const cols = 6;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (row, col) => {
    const seatId = `${row}-${col}`;
    setSelectedSeats(prev =>
      prev.includes(seatId)
        ? prev.filter(s => s !== seatId)
        : [...prev, seatId]
    );
  };

  return (
    <div className="cafetaria">
      <h1>Company Cafetaria Seat Booking</h1>
      <div className="seats">
        {[...Array(rows)].map((_, row) => (
          <div key={row} className="row">
            {[...Array(cols)].map((_, col) => {
              const seatId = `${row}-${col}`;
              const isSelected = selectedSeats.includes(seatId);
              return (
                <div
                  key={col}
                  className={`seat ${isSelected ? "selected" : ""}`}
                  onClick={() => toggleSeat(row, col)}
                >
                  {seatId}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cafetaria;
