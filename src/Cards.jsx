import React from "react";

function Card(props) {                //this is a component & props represent as an object
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="seriesimg" className="image" />
                    <div className="card-info">
                        <span className="card-category">{props.title}</span>
                        <h3 className="card-name">{props.name}</h3>
                        <a href={props.links} target="blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Card;