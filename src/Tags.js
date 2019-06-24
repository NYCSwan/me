import React from "react";
import "./Tags.scss";

export default function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map(tag => {
        return <button className="tag">{tag}</button>;
      })}
    </div>
  );
}
