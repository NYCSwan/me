import React from "react";
import "./Quote.scss";

export default function Quote({ text, author }) {
  return (
    <React.Fragment>
      <h2 className="Quote">{text}</h2>
      <h5 className="Quote-author">{author}</h5>
    </React.Fragment>
  );
}

// export default Quote;
