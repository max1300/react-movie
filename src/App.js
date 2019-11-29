import React from 'react';
import './App.scss';
import Navbar from "./Navbar";
import AddMovie from "./AddMovie";
import DisplayMovies from "./DisplayMovies";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactForm from "./ContactForm";
import Home from "./components/Home";

const App = () => {

  return (
    <>
      <Navbar/>
          <Router>
              <div>
                  <Switch>
                      <Route path="/contact" component={ContactForm} />
                      <Route path="/addmovie" component={AddMovie} />
                      <Route path="/movies" component={DisplayMovies} />
                      <Route exact path="/" component={Home} />
                  </Switch>
              </div>
          </Router>
    </>
  );
}

export default App;
