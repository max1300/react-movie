import React from 'react';
import './App.scss';
import Navbar from "./Navbar";
import AddMovie from "../components/movie/Add";
import DisplayMovies from "./movie/DisplayMovies";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ContactForm from "./contact/ContactForm";
import Home from "./home/Home";

const App = () => {

    return (
        <>
            <Navbar/>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/contact" component={ContactForm}/>
                        <Route path="/addmovie" component={AddMovie}/>
                        <Route path="/movies" component={DisplayMovies}/>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
