import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import art from "./static/art.jpg";
import education from "./static/education.jpg";
import fam from "./static/fam.jpg";
import food from "./static/food.jpg";
import startups from "./static/startups.jpg";
import travel from "./static/travel.jpg";
import reading from "./static/reading.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "black"
  },
  gridList: {
    width: 1000,
    height: 600
  }
}));

const tileData = [
  {
    img: art,
    title: "Art",
    alt: "Photo by Khara Woods on Unsplash",
    cols: 2,
    rows: 1
  },
  {
    img: reading,
    title: "Books",
    alt: "Photo by Raj Eiamworakul on Unsplash",
    cols: 3,
    rows: 1
  },
  {
    img: food,
    title: "Cooking",
    alt: "Photo by Katie Smith on Unsplash",
    cols: 2,
    rows: 2
  },
  {
    img: startups,
    title: "Start Ups",
    alt: "Photo by Clark Tibbs on Unsplash",
    cols: 2,
    rows: 1
  },
  {
    img: education,
    title: "Education",
    alt: "Photo by Tim Mossholder on Unsplash",
    cols: 2,
    rows: 1
  },
  {
    img: fam,
    title: "Family",
    alt: "Rogue -- pair programming partner, puppy extrordinary",
    cols: 3,
    rows: 1
  },
  {
    img: travel,
    title: "Travel",
    alt: "Photo by Marten Bjork on Unsplash",
    cols: 1,
    rows: 3
  }
];

export default function About() {
  const classes = useStyles();
  return (
    <div className="About-container">
      <h2 className="header">
        Hey there! Thanks for stopping by. If you'd like to learn a little more
        about me, click on the links below.
      </h2>
      // Personal - fam, fun, interests // Professional - education, startups,
      etc
      <div className={classes.root}>
        <GridList cellHeight={150} className={classes.gridList} cols={6}>
          {tileData.map(tile => (
            <GridListTile
              key={tile.img}
              cols={tile.cols || 1}
              rows={tile.rows || 1}
            >
              <img
                className={`img ${tile.title}`}
                src={tile.img}
                alt={tile.title}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
