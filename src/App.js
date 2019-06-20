import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <React.StrictMode>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
        </React.StrictMode>
      </div>
    </Router>
  );
}

export default App;
