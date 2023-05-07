import React from "react";

export default function Testimonials(props) {
    return (
            <div className="testimonial">
                <div className="testimonial-main"> 
                    <img className="testimonial-img" src={props.img}></img>
                    <div className="i-had-no-choice">
                        <p className="testimonial-message">{props.message}</p>
                    </div>
                </div>
                <h5 className="testimonial-footer">{props.name} | {props.course}</h5>
            </div>
    )
}