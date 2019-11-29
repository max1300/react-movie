import React from 'react';
import './App.scss';
// import ContactForm from "./ContactForm";
import Navbar from "./Navbar";
import AddMovie from "./AddMovie";
import Movies from "./Movies";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactForm from "./ContactForm";
import FirstPage from "./FirstPage";


const App = () => {

  return (
    <>
      <Navbar/>
          <Router>
              <div>
                  <Switch>
                      <Route exact path="/" component={FirstPage} />
                      <Route path="/contact" component={ContactForm} />
                      <Route path="/movies/:title&:year" component={Movies} />
                      <Route path="/addmovie" component={AddMovie} />

                  </Switch>
              </div>
          </Router>
    </>
  );
}

export default App;
