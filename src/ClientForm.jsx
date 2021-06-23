import React, { useState } from "react";

const ClientForm = ({ onClientAdd }) => {
  const [nouveauClient, setNouveauClient] = useState("");

  const handleChange = event => {
    setNouveauClient(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onClientAdd({ name: nouveauClient });
    setNouveauClient("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={nouveauClient}
        onChange={handleChange}
        type="text"
        placeholder="Ajouter un robot"
      />
      <button>Confirmer</button>
    </form>
  );
};

export default ClientForm;
