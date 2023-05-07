import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
            <nav className="navbar">
                <div className="main">
                    <a href="/"><img src="header_logo_29f7737293e688056b6aff4fa45974c6.png" className="main-img"/></a>
                </div>
                <ul className="list-items">
                    <li><a href="/">HOME</a></li>
                    <li><a href="#AboutUs">ABOUT US</a></li>
                    <li><a href="#PopularCourses">POPULAR COURSES</a></li>
                    <li><a href="IQ Hub Pricing Packages.pdf" target="blank">PRICING PACKAGES</a></li>
                    <li><a href="#FacultySection">FACULTY</a></li>
                    <li><a href="#Testimonials">TESTIMONIALS</a></li>
                    <li><a href="#contact-us-main-header">CONTACT US</a></li>
                </ul>
            </nav>
    )
}
