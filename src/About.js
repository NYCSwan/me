import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import art from "./static/art.jpg";
import education from "./static/education.jpg";
import fam from "./static/fam.jpg";
import food from "./static/food.jpg";
import startups from "./static/startups.jpg";
import travel from "./static/travel.jpg";
import reading from "./static/reading.jpg";
import hustle from "./static/hustle.jpg";
import "./About.scss";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "flex-start",
    overflowX: "hidden",
    scrollBhavior: "smooth",
    overflowY: "scroll",
    paddingBottom: 15,
    marginBottom: 25
  },
  gridList: {
    width: 900,
    height: 700
  },
  tile: {
    borderColor: "pink",
    borderWidth: 1
  },
  tilebar: {
    height: "100%",
    zIndex: 99,
    overflow: "visible",
    transition: "transform .5s ease"
  },
  hide: {
    zIndex: 90,
    height: 30
  },
  sub: {
    height: "auto",
    display: "block"
  },
  subhide: {
    height: 0,
    display: "none"
  }
}));

export default function About() {
  const classes = useStyles();
  const [hover, handleHover] = useState(false);
  const [idx, setIdx] = useState(-1);

  return (
    <div className="About-container">
      <div className={classes.root}>
        <GridList
          cellHeight={100}
          className={classes.gridList}
          cols={5}
          spacing={4}
        >
          <GridListTile key="Subheader" cols={5} style={{ height: "auto" }}>
            <ListSubheader component="div">
              Hey there! Thanks for stopping by. A little more about me:
            </ListSubheader>
          </GridListTile>
          {tileData.map((tile, index) => (
            <GridListTile
              onMouseOver={() => {
                // debugger;
                handleHover(!hover);
                setIdx(index);
              }}
              key={tile.img}
              cols={tile.cols || 1}
              rows={tile.rows || 1}
              className={classes.tile[idx]}
            >
              <GridListTileBar
                className={
                  hover & (idx === index) ? classes.tilebar : classes.hide
                }
                title={tile.title}
                subtitle={
                  <span
                    className={idx !== index ? classes.subhide : classes.sub}
                  >
                    {tile.sub}
                  </span>
                }
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
              <img className="img" src={tile.img} alt={tile.alt} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

const tileData = [
  {
    img: art,
    title: "Art",
    sub:
      "You can find me painting or touring the latest exhibits at my favorite museums.",
    alt: "Photo by Khara Woods on Unsplash",
    cols: 3,
    rows: 3
  },
  {
    img: travel,
    sub:
      "My love of traveling has introduced me to new friends, incredible adventures and a wider understanding of our world, the needs of people and the possibilities that lay before us.",
    title: "Travel",
    alt: "Photo by Marten Bjork on Unsplash",
    cols: 2,
    rows: 3
  },
  {
    img: startups,
    sub:
      "I love working with startups and non profit organizations. Utilizing my skills as a programmer, thought leader, and ",
    title: "Start Ups",
    alt: "Photo by Katie Smith on Unsplash",
    cols: 2,
    rows: 2
  },
  {
    img: reading,
    sub:
      "Need a good book for the beach or summary of the latest javascript text? I've probably read it.",
    title: "Book Worm",
    alt: "Photo by Raj Eiamworakul on Unsplash",
    cols: 1,
    rows: 2
  },
  {
    img: fam,
    title: "Family",
    sub: "My puppy, Rogue!",
    alt: "Rogue -- pair programming partner, puppy extrordinary",
    cols: 2,
    rows: 2
  },
  {
    img: food,
    title: "Dillitant farmer & chef",
    sub:
      "I may live in NYC but I love growing my window sill garden and cooking anything spicy!",
    alt: "Photo by Clark Tibbs on Unsplash",
    cols: 2,
    rows: 2
  },
  {
    img: education,
    title: "Education",
    sub:
      "Dedicated to continuously learning, whether that may be building curricula with my previous experience as a teacher or teaching myself a new programming language.",
    alt: "Photo by Tim Mossholder on Unsplash",
    cols: 2,
    rows: 2
  },
  {
    img: hustle,
    sub: "hustling",
    title: "filler",
    alt: "logo as filler",
    cols: 1,
    rows: 2
  }
];
