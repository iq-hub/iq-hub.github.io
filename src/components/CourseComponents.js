import React from "react";

export default function CourseComponents(props) {
    return (
            <div className="course-component">
                <img className="course-component-image" src={props.img} id={props.id} />
                <h3 className="course-component-title">{props.title}</h3>
                <p className="course-component-description">{props.description}</p>
            </div>
    )
}