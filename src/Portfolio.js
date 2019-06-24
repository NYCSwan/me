import React from "react";
import { Route } from "react-router-dom";
import CardFull from "./CardFull";
import CardClosed from "./CardClosed";
import Topic from "./Topic";
import mobile from "./static/mobile.jpg";
import web from "./static/web.jpg";

import "./Portfolio.scss";

export default function Portfolio({ match }) {
  return (
    <div className="Portfolio-container">
      <Route
        exact
        path={match.path}
        render={() => (
          <h3 className="header">
            Please select a portfolio topic to see more of my experience.
          </h3>
        )}
      />
      <div className="cards">
        {match.isExact ? (
          <React.Fragment>
            <CardFull
              image={web}
              title="Websites, Single Page Apps, SEO, Full Stack"
              body="single page apps info"
              id="spa"
              match={match}
            />
            <CardFull
              image={mobile}
              title="IoT Mobile App"
              body="Cross-platform apps on both android and apple stores."
              id="mobile"
              match={match}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <CardClosed
              image={web}
              title="Websites, Single Page Apps, SEO, Full Stack"
              body="single page apps info"
              id="spa"
              match={match}
            />
            <CardClosed
              image={mobile}
              title="IoT Mobile App"
              body="Cross-platform apps on both android and apple stores."
              id="mobile"
              match={match}
            />
          </React.Fragment>
        )}
      </div>
      <Route path={`${match.path}/:id`} component={Topic} />
    </div>
  );
}

// <Link to={`${match.url}/mobile`}>Mobile</Link>
// <Button size="small" color="primary">
//   Learn More
// </Button>
