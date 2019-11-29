import React from "react";
import logo from "../img/logo.jpeg";

const Navbar = () => {
    return (
        <nav className="uk-navbar-container uk-margin" style={{backgroundColor:"#4A4A46"}} uk-navbar="true">
            <div className="uk-navbar">

                <div className="uk-nav-center">
                    <img src={logo} alt="" style={{height:"80px"}}/>
                </div>

                <a className="uk-navbar-item uk-logo" href="/" style={{fontFamily: 'Fugaz One cursive', color:"white"}}>CHIBRE  BAY</a>

                <div className="uk-navbar-right">

                    <ul className="uk-navbar-nav" style={{listStyle:"none"}}>
                        <li><a href="/movies" style={{color:"white"}}>Voir les films</a></li>
                        <li><a href="/addmovie" style={{color:"white"}}>Ajouter un film</a></li>
                        <li><a href="/contact" style={{color:"white"}}>Contact</a></li>
                    </ul>

                    <div className="uk-navbar-item">

                        <form>
                            <input className="uk-input uk-form-width-small" type="text" placeholder="Input" />
                            <button className="uk-button uk-button-primary">Button</button>
                        </form>

                    </div>

                </div>

            </div>
        </nav>
    );
}
export default Navbar;