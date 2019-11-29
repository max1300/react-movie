import React,{useState, useEffect} from "react";

const DisplayMovies = (props) => {


    return (
        <div className="uk-container">
            { props.chibre &&
            <div className="uk-margin" style={{color:"white"}}>
                <img src={props.chibre.Poster} alt="" style={{height:"200px", width:"150px"}}/>
                <p>{props.chibre.Title}</p>
                <p>{props.chibre.Year}</p>
            </div>}

        </div>
    );
}
export default DisplayMovies;