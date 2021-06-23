import React from "react";

const Client = ({ details, onDelete }) => (
  <li>
    {details.name} <button onClick={() => onDelete(details._id)}>X</button>
  </li>
);

export default Client;
