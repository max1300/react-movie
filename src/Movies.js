import React from "react";

const Movies = (props) => {
    return (
        <div className="uk-container">
            {console.log(props.store)&&
            <div className="uk-margin" style={{color:"white"}}>
                <img src={props.store.Poster} alt="" style={{height:"200px", width:"150px"}}/>
                <p>{props.store.Title}</p>
                <p>{props.store.Year}</p>
            </div>}

        </div>
    );
}
export default Movies;