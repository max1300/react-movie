import React from "react";

const DisplayMovies = (props) => {


    return (
        <div className="uk-container">
            {props.chibre &&
            < div className="uk-card- uk-width-1-2@m" style={{width: "280px", textAlign: "center"}}>
                <h3 className="uk-card-title" style={{color: "white"}}>{props.chibre.Title}</h3>
                <img src={props.chibre.Poster} alt="" style={{height: "200px", width: "150px"}}/>
                <p style={{color: "white"}}>Year: {props.chibre.Year}</p>
                    <p style={{color: "white", textAlign:"justify"}}>
                        {props.chibre.Plot}
                    </p>
            </div>
            }

        </div>
    );
}
export default DisplayMovies;