import React from "react"
import 'react-slideshow-image/dist/styles.css' 
import { Fade, Zoom, Slide } from 'react-slideshow-image'


const slideImages = [
    {
        url: "https://i.imgur.com/MQTkayZ.jpeg",
    },
    {
        url: "tp-list-2022v2.jpg",
    },
    {
        url: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
]

const divStyle = {
    display: 'flex',
    alignitems: "center",
    justifyContent: "center",
    height: "700px",
    backgroundSize: "cover",
}

function Slider() {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((image, index) => (
                    <div key={index}>
                        <div style={{...divStyle, backgroundImage:`url(${image.url})`}}>
                        </div>
                    </div>

                ))}
            </Slide>
        </div>
    )
}
export default Slider