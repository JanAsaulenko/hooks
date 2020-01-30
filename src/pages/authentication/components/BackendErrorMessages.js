import React from "react";

export default ({ backendErrors }) => {
  const errorMessages = Object.keys(backendErrors).map(name => {
    const messages = backendErrors[name].join(" ");
    return `${name} ${messages}`;
  });

  return (
    <ul className="error-messages">
      {errorMessages.map(error => {
        return <li key={error}>{error}</li>;
      })}
    </ul>
  );
};
