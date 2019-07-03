import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import topics from "./static/libs/About.js";

import "./About.scss";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "flex-start",
    msOverflowStyle: "none",
    overflow: "scroll -moz-scrollbars-none",
    paddingBottom: 15,
    marginBottom: 25,
    height: "100%",
    width: "100%"
  },
  gridList: {
    width: 900,
    height: "100%",
    overflow: "scroll",
    paddingBottom: "10%",
    boxSizing: "content-box"
  },
  tilebar: {
    zIndex: 99,
    height: "100%",
    transition: "height .5s ease-in-out"
  },
  titleWrap: {
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
    alignSelf: "center",
    paddingBottom: 10,
    paddingTop: 10
  },
  hide: {
    height: "2rem",
    zIndex: 99
  },
  subtitle: {
    overflowY: "visible",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    width: "inherit",
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  subT: {
    overflowY: "visible",
    alignSelf: "center",
    lineHeight: "1.2rem",
    height: "auto",
    textAlign: "left",
    whiteSpace: "pre-wrap"
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
          spacing={6}
        >
          <GridListTile key="Subheader" cols={5}>
            <ListSubheader component="div">
              Hey there! Thanks for stopping by. I am a full stack developer
              with a unique background in education and the arts. I make high
              quality websites and mobile apps with exceptional user experience.
            </ListSubheader>
          </GridListTile>
          {topics.map((tile, index) => (
            <GridListTile
              onMouseEnter={() => {
                setIdx(index);
                handleHover(true);
              }}
              onMouseLeave={() => {
                setIdx(-1);
                handleHover(false);
              }}
              key={tile.img}
              cols={tile.cols || 1}
              rows={tile.rows || 1}
            >
              <GridListTileBar
                classes={{
                  root:
                    hover & (idx === index) ? classes.tilebar : classes.hide,
                  rootSubtitle: classes.subtitle,
                  titleWrap: classes.titleWrap,
                  subtitle: classes.subT
                }}
                title={
                  <span className={classes.title}>
                    {tile.title.toUpperCase()}
                  </span>
                }
                subtitle={<span>{tile.sub}</span>}
              />
              <img
                className={hover & (idx === index) ? "img grey" : "img"}
                src={tile.img}
                alt={tile.alt}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
