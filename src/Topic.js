import React from "react";

export default function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.id}</h3>
    </div>
  );
}
