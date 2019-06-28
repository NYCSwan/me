import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 350,
    minHeight: 400,
    marginLeft: 40,
    marginRight: 40,
    borderColor: "rgba(44,48,66,0.3)",
    borderWidth: 2
  },
  media: {
    height: 240,
    width: "auto"
  },
  button: {
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

  return (
    <Card raised={true} className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
          component="img"
        />
        <CardContent>
          <Typography gutterBottom component="h5">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Link className={classes.link} to={`${match.url}/${id}`}>
          Learn More
        </Link>
      </CardActions>
    </Card>
  );
}
