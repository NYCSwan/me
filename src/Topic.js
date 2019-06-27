import React from "react";
import "./Topic.scss";
import TopicJson from "./static/libs/topics.json";
import Tags from "./Tags";

export default function Topic({ match }) {
  return (
    <div className="Topic">
      <h3>{match.params.id}</h3>
      <div className="topics">
        {TopicJson.map(topic => {
          if (topic.topic === match.params.id) {
            return (
              <div key={topic.title} className="body">
                <h5 className="title">{topic.title}</h5>
                <p className="text">{topic.description}</p>
                <p className="text">{topic.link}</p>
                <Tags tags={topic.tags} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
