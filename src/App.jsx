import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import GamePage from "./pages/GamePage";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route exact path="/game" component={GamePage} />
        {/* <Route exact path="/resume">
          <Redirect to={Resume} />
        </Route> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
