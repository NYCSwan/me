import React from "react";
import "./Tags.scss";

export default function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map(tag => {
        return (
          <button key={tag} className="tag">
            {tag}
          </button>
        );
      })}
    </div>
  );
}
