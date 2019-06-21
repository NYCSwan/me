import React from "react";
import Fade from "@material-ui/core/Fade";
import "./Home.scss";
import water from "./static/water.mp4";
import Quote from "./Quote";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    alignSelf: "center",
    maxHeight: 100
  },
  swipe: {
    justifyContent: "center",
    alignSelf: "center",
    width: "70%"
  }
});

const quotes = [
  {
    text:
      "When you don’t create things, you become defined by your tastes rather than ability. Your tastes only narrow & exclude people, so create.",
    author: "― Why The Lucky Stiff"
  },
  {
    text:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "― Martin Fowler"
  },
  {
    text:
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    author: "- Patrick McKenzie"
  }
];

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div className="Home-container">
      <video id="background-video" loop autoPlay>
        <source src={water} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className={classes.swipe}
      >
        {quotes.map((quote, index) => (
          <Fade in={true}>
            <Quote text={quote.text} author={quote.author} />
          </Fade>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        variant="dots"
        steps={3}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 2}>
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}
