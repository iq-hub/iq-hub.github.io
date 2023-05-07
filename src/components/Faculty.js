import React from "react";

export default function Faculty(props) {
    return (
            <div className="faculty-img-container">
                <h2 className="teacher">{props.teacher}</h2>
                <h3>{props.faculty}</h3>
                <img src={props.img}></img>
            </div>
    )
}