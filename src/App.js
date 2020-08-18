import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import { CV } from "./CV";
import Education from "./Education";
import Transcript from "./Transcript";
import PreviousWork from "./PreviousWork";
// import Thesis from "./Thesis";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/CV" component={CV} />
              <Route path="/education" component={Education} />
              <Route path="/transcript" component={Transcript} />
              <Route path="/previousWork" component={PreviousWork} />
              <Route
                path="/thesis"
                component={() => {
                  window.open(
                    "https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1446835&dswid=7998",
                    "_blank" // <- This is what makes it open in a new window.
                  );
                  return (
                    <div>
                      <h2>Thesis</h2>
                    </div>
                  );
                }}
              />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
