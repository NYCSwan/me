import React from "react";
import "./Topic.scss";
import TopicJson from "./static/libs/topics.json";
import Tags from "./Tags";

export default function Topic({ match }) {
  return (
    <div className="Topic">
      <h3>{match.params.id.toUpperCase()}</h3>
      {/* TODO: sort by tags */}
      <div className="topics">
        {TopicJson.map(topic => {
          if (topic.topic === match.params.id) {
            return (
              <div key={topic.title} className="body">
                <div className="top">
                  <div className="header">
                    <h5 className="title">{topic.title}</h5>
                    <h6 className="dates">{topic.date}</h6>
                  </div>
                  <h6 className="sub">Role: {topic.role}</h6>
                </div>
                <div className="bottom">
                  <p className="text">{topic.description}</p>
                  <p className="link">{topic.link}</p>
                  <Tags tags={topic.tags} />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
