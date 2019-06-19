import React from "react";
import { Route, Link } from "react-router-dom";
import Topic from "./Topic";
import "./Portfolio.scss";

export default function Portfolio({ match }) {
  return (
    <div className="Portfolio-container">
      <h2 className="Quote">
        Any fool can write code that a computer can understand. Good programmers
        write code that humans can understand.
      </h2>
      <h5 className="Quote-author">― Martin Fowler</h5>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => (
          <h3>Please select a portfolio topic to see more of my experience.</h3>
        )}
      />
      <ul>
        <li>
          <Link to={`${match.url}/spa`}>Single Page Apps</Link>
        </li>
        <li>
          <Link to={`${match.url}/mobile`}>Mobile</Link>
        </li>
      </ul>
    </div>
  );
}
