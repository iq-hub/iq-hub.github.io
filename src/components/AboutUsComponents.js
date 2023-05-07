import React from "react"

export default function AboutUsComponents(props) {
    return (
            <div className="about-us-component">
                <img className="about-us-component-image" src={props.img} />
                <h3 className="about-us-component-heading">{props.title}</h3>
                <p className="about-us-component-description">{props.description}</p>
            </div>
    )
}