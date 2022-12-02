import React, { useState } from "react";
import ShowCase from "./ShowCase";

function ShowTrain() {
  const [data, setData] = useState({
    name: "",
    seats: 1,
    show: false
  });

  function newWindow() {
    if(data.name===""){
      alert("Enter name");
      return;
    }
    if (data.seats > 80) {
      alert("all seats are booked try again next time");
    } else {
      setData({ ...data, show: true });
    }
  }

  const totalSeats = Array.from({ length: 10 * 8 }, (_, i) => i + 1);

  let selectedItem = Number(data.seats);

  return (
    <div className="show_seats">
      {data.show === false ? (
        <div className="forms">
          <h2>Seats Reservation</h2>
          Passenger Name:
          <input
            type="text"
            name="username"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value})}
          />
          Seats:
          <input
            type="number"
            name="seat"
            min="1"
            onChange={(e) =>
              setData({
                ...data,
                seats: Number(e.target.value) + Number(data.seats)
              })
            }
          />
          <button onClick={newWindow}>Submit</button>
        </div>
      ) : (
        <>
          <ShowCase />
          <div className="seats">
            {totalSeats.map((value, index) => {
              return (
                <div
                  key={value}
                  className={
                    index <= selectedItem
                      ? "seat , selected"
                      : "seat notSelected"
                  }
                ></div>
              );
            })}
          </div>
          <button onClick={() => setData({ ...data, show: false })}>
            Back
          </button>
        </>
      )}
    </div>
  );
}
export default ShowTrain;