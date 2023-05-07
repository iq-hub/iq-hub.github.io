import React from "react"

export default function AboutUs() {
    return (
            <div className="about-us" id="AboutUs">
                <div className="main-about">
                    <h1 className="about-us-h1">About Us</h1>
                    <h4 className="about-us-h4">We are the IQ Hub Coaching Institute</h4>
                    <p className="about-us-text">In the last few years of its existence, our Institute has achieved a
                    leading position in providing excellent education. Considering the subject matter,
                    we have been successful in implementing a remarkable variety of new teaching methods,
                    using the various tools available on our platform. We are devoted to brightening the
                    future of our students who are looking for an elite educational structure.
                    </p>
                    <p id="second-para" className="about-us-text">
                    We have set a high benchmark for spectacular results and success in examinations.
                    We take unified credit for generating toppers each year in Board Exams, NEET, CA Foundation, CMA Foundation etc.
                    by providing our students engaging study material along with practice tests and an array of past year exams and sample tests.
                    </p>
                </div>

                <div className="about-image">
                    <img id="about-image" src="Poster.jpg" />
                </div>


            </div>
    )
}