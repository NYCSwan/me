import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CardMedia from "@material-ui/core/CardMedia";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  card: {
    maxWidth: 350,
    minHeight: 200,
    marginLeft: 40,
    marginRight: 40,
    borderColor: "rgba(44,48,66,0.3)",
    borderWidth: 2
  },
  media: {
    height: 200,
    width: "auto"
  },
  button: {
    alignContent: "center",
    display: "flex",
    justifyContent: "center"
  },
  link: {
    color: "rgba(85, 26, 139, 1)",
    textDecoration: "none"
  }
});

export default function CardFull({ match, id, image, title, body }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Card raised={true} className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
          component="img"
        />
      </CardActionArea>
      <CardActions className={classes.button}>
        <Link className={classes.link} to={`${match.url}/${id}`}>
          Learn More
        </Link>
      </CardActions>
    </Card>
  );
}
