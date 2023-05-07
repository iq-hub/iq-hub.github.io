import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import AboutUs from './components/AboutUs';
import AboutUsData from "./AboutUsData.js"
import AboutUsComponents from './components/AboutUsComponents';
import CourseComponentsData from './CourseComponentsData';
import CourseComponents from './components/CourseComponents';
import FacultyImages from './FacultyImages';
import Faculty from './components/Faculty';
import TestimonialData from './TestimonialData';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import { Route, Routes } from "react-router-dom"

function AboutUsComponentsMapper(item) { //About us components function
  return (
          <AboutUsComponents
          img={item.img}
          title={item.title}
          description={item.description}
        />
  )
}
let AboutUsDataMapped = AboutUsData.map(AboutUsComponentsMapper) 

function CourseComponentsMapper(item) { //Course components function
  return (
          <CourseComponents
          img={item.img}
          title={item.title}
          description={item.description}
          id={item.id}
        />
  )
}
let CourseComponentsDataMapped = CourseComponentsData.map(CourseComponentsMapper) 

function FacultyMapper(item) {
  return (
          <Faculty
          img={item.img}
          teacher={item.teacher}
          faculty={item.faculty} />
  )
}
let FacultyMapped = FacultyImages.map(FacultyMapper)

function TestimonialMapper(item) {
  return(<Testimonials 
          img={item.img}
          message={item.message}
          name={item.name}
          course={item.course} />)
}
let TestimonialsMapped = TestimonialData.map(TestimonialMapper)



function App() { //Main App function
  return (
    
    <div className="App">
      
      <Navbar />
     
      <Slider /> 

      <AboutUs />
      <div className='about-us-components'>
        {AboutUsDataMapped}
      </div>

      <div className='popular-courses' id='PopularCourses'>
        <h1 className='popular-courses-heading'>Popular Courses</h1>
        <div className='course-components'>
          {CourseComponentsDataMapped}
        </div>
        <a id='view-all-courses-a-tag' href="IQ Hub Pricing Packages.pdf" target="blank">
          <button id='view-all-courses-btn'>View all courses</button>
        </a>
      </div>

      <div className='faculty-section' id="FacultySection">
        <h1 className='popular-courses-heading' id="faculty-members-heading">Faculty Members</h1>
        <div className='faculty'>
          {FacultyMapped}
        </div>
      </div>

      <div className='testimonial-wrapper'>
        <h1 id="Testimonials">Testimonials from our students</h1>
        <div className='testimonials'>
          {TestimonialsMapped}
        </div>
      </div>

      
      <h1 id="contact-us-main-header">Contact Us</h1>
      <ContactUs />
      
    </div>
  );
}
export default App;
