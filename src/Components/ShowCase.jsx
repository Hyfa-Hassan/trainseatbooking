import React from "react";

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <small className="selected">Occupied</small>
      </li>
      <li>
        <small className="notSelected">Not Occupied</small>
      </li>
    </ul>
  );
}
export default ShowCase;