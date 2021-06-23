import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";
import axios from 'axios';

import "./styles.css";

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';

const App = () => {

  // At the beginning, posts is an empty array
  const [clients, setClients] = useState([]);

  // Define the function that fetches the data from API
  const fetchData = async () => {
    const { data } = await axios.post(`http://localhost:3000/robots`, {ids: []})
    setClients(data);
  };

  // Trigger the fetchData after the initial render by using the useEffect hook
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/robot/${id}`);
    fetchData();
  };

  const handleAdd = async (client) => {
    await axios.post(`http://localhost:3000/robot`, {name: client.name});
    fetchData();
  };

  const title = "Liste des robots:";

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {clients.map(client => (
          <Client key={client._id} details={client} onDelete={handleDelete} />
        ))}
      </ul>
      <ClientForm onClientAdd={handleAdd} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
