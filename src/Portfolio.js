import React from "react";
import { Route, Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Topic from "./Topic";
import mobile from "./static/mobile.png";
import web from "./static/web.png";

import "./Portfolio.scss";

const useStyles = makeStyles({
  card: {
    maxWidth: 350,

    minHeight: 400,
    marginLeft: 40,
    marginRight: 40
  },
  media: {
    height: 240,
    width: "auto"
  }
});

export default function Portfolio({ match }) {
  const classes = useStyles();
  return (
    <div className="Portfolio-container">
      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => (
          <h3>Please select a portfolio topic to see more of my experience.</h3>
        )}
      />
      <div className="cards">
        <Card raised={true} className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={mobile}
              title="IoT Mobile App"
              component="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Single Page Apps
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={`${match.url}/spa`}>Learn More</Link>
          </CardActions>
        </Card>
        <Card raised={true} className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={web}
              title="Websites, Single Page Apps, SEO, Full Stack"
              component="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Mobile Apps
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={`${match.url}/mobile`}>Learn More</Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

// <Link to={`${match.url}/mobile`}>Mobile</Link>
// <Button size="small" color="primary">
//   Learn More
// </Button>
