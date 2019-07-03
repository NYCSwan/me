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
    maxHeight: 100,
    zIndex: 99,
    backgroundColor: "transparent"
  },
  dots: {
    backgroundColor: "#53864A"
  },
  active: {
    backgroundColor: "rgb(85, 26, 139)"
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
      "Megan has been an indominable force behind our success. She has tirelessly worked to meet deadlines, creatively tackling problems that ",
    author: "― Aeroasis Founder"
  },
  {
    text:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "― Martin Fowler"
  },
  {
    text:
      "Megan is a great pair-programming partner. She's focused on helping navigate us through the problem or drives a feature while actively listening to my input and contributing thoughtfully to improve our code.",
    author: "― Coworker"
  },
  {
    text:
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    author: "- Patrick McKenzie"
  },
  {
    text:
      "I have been so impressed with her persistence and dedication to learning and pushing through obstacles. I've seen many students crushed by the challenges in this class, Megan, even with additional challenges, made the most of it.",
    author: "― Bootcamp Professor"
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
      <video id="background-video" loop muted autoPlay>
        <source src={water} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className="swipe"
        interval={6000}
      >
        {quotes.map((quote, index) => (
          <Fade in={true} key={`${quote.author}-${index}`}>
            <Quote text={quote.text} author={quote.author} />
          </Fade>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        variant="dots"
        steps={6}
        position="static"
        activeStep={activeStep}
        classes={{
          root: classes.root,
          dot: classes.dots,
          dotActive: classes.active
        }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 2}>
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
          </Button>
        }
      />
    </div>
  );
}
