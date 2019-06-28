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
import data from "./static/data.jpg";
import design from "./static/design.jpg";
import learn from "./static/learn.jpg";
import collaboration from "./static/collaboration.jpg";
import git from "./static/git.jpg";

import "./About.scss";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "flex-start",
    scrollBhavior: "smooth",
    overflow: "visible",
    paddingBottom: 15,
    marginBottom: 25
  },
  gridList: {
    width: 900,
    // minHeight: 700,
    overflow: "visible"
  },
  tile: {
    // backgroundColor: "pink"
  },
  tilebar: {
    height: "100%",
    zIndex: 99,
    transition: "height .7s ease-in-out"
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
    height: 30
  },
  title: {
    alignSelf: "center"
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
    // fontFamily: ,
  },
  header: {
    width: "80%",
    paddingBottom: "5%",
    fontFamily: "Cuprum, sans-serif",
    color: "black",
    fontSize: "1.1rem",
    // alignSelf: "center",
    marginTop: "5%"
  }
  // sub: {
  //   // width: "inherit",
  //   // textOverflow: "visible",
  //   overflowY: "visible",
  //   // height: 150,
  //   lineHeight: "1.2rem"
  // },
  // subhide: {
  //   height: 0,
  //   display: "none"
  // }
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
            <ListSubheader component="div" className={classes.header}>
              Hey there! Thanks for stopping by. I am a full stack developer
              with a unique background in education and the arts. A little more
              about me:
            </ListSubheader>
          </GridListTile>
          {tileData.map((tile, index) => (
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

const tileData = [
  {
    img: data,
    sub:
      "With so much available data provided by open source contributions, and transparency efforts, data visualizations are a great way to help users undertand and analyze important information and data trends.",
    title: "Data Visualizations",
    alt: "data visualizations",
    cols: 2,
    rows: 2
  },
  {
    img: design,
    sub:
      "Design and development go hand-in-hand. If technology is not made accessable through a thoughtful user-focused design, it will never succeed. In my work, I try to ensure each feature keeps the user in mind.",
    title: "Design",
    alt: "Photo by Hal Gatewood on Unsplash",
    cols: 2,
    rows: 2
  },
  {
    img: hustle,
    sub: "hustling",
    title: "Work Hard",
    alt: "logo as filler",
    cols: 1,
    rows: 2
  },
  {
    img: travel,
    sub:
      "My love of traveling has introduced me to new friends, incredible adventures and a wider understanding of our world, the needs of people and the possibilities that lay before us.",
    title: "Travel",
    alt: "Photo by Marten Bjork on Unsplash",
    cols: 1,
    rows: 3
  },
  {
    img: learn,
    title: "Education",
    sub:
      "As a former teacher, I take advantage of any opportunity to share my knowledge and can often be found answering CS questions to technical and non-technical teammates. Dedicated to continuously learning-- building product-related education materials with my education background, assisting the team or teaching myself a new programming language.",
    alt: "Photo by Greg Rakozy on Unsplash",
    cols: 2,
    rows: 3
  },
  {
    img: art,
    title: "Art",
    sub:
      "When my nose is not glued to my computer, you can find me painting or touring the latest exhibits at my favorite museums.",
    alt: "Photo by Khara Woods on Unsplash",
    cols: 2,
    rows: 3
  },
  {
    img: startups,
    sub:
      "I love working with startups and non profit organizations. Utilizing my skills as a programmer, thought leader, and manager, I lead my teams and clients to success with my wide breadth of expertise and dedication to excellence.",
    title: "Start Ups",
    alt: "Photo by Katie Smith on Unsplash",
    cols: 2,
    rows: 2
  },
  {
    img: reading,
    sub:
      "Need a good book for the beach or summary of the latest javascript text? Ask me! I've probably read it. My skills as a developer are enhanced as a book worm. I can spot an errant , or typo anywhere.",
    title: "Book Worm",
    alt: "Photo by Raj Eiamworakul on Unsplash",
    cols: 1,
    rows: 2
  },
  {
    img: fam,
    title: "Me",
    sub:
      "My puppy, Rogue and family mascot had to make it into my website. I'm a startup founder, technology nerd, former public school teacher, and non-profit manager. I'm always up for a challenge, get in touch if you'd like a great partner",
    alt: "Rogue -- pair programming partner, puppy extrordinary",
    cols: 2,
    rows: 2
  },
  {
    img: food,
    title: "Dillitant farmer & chef",
    sub:
      "I may live in NYC but I love growing my window sill garden and cooking anything spicy! I have been working on IoT connected gardening and cooking applications for the last few years. Always happy to dish on the future of IoT in farming and food!",
    alt: "Photo by Clark Tibbs on Unsplash",
    cols: 2,
    rows: 3
  },
  {
    img: collaboration,
    title: "Collaboration",
    sub:
      "No project can be successful without deliberate, clear communcation and collaboration. ",
    alt: "Photo by John Schnobrich on Unsplash",
    cols: 2,
    rows: 3
  },
  {
    img: git,
    title: "Skills",
    sub: "Something here",
    alt: "Photo by Yancy Min on Unsplash",
    cols: 1,
    rows: 3
  }
];
