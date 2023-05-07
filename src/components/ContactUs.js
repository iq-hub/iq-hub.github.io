import React from "react";

export default function ContactUs () {
    function Submit(e) {
        e.preventDefault()
        let formData = new FormData(document.querySelector("#contact-form"))
        fetch("https://script.google.com/macros/s/AKfycbyn9N9SJ_cuSYy4hx2plaTYVlb305TH_nLM1dZeFO6Bq3dY-qNrhihpnIcimNAV-va-DQ/exec", {
            method: "POST",
            body: formData
        })
        alert("Your message was sent succesfully!")
        document.querySelector("#contact-form").reset()
    }


    return (
            <div className="contact-us">
                    
                <div className="contact-details">
                    <h1>Get in touch</h1>
                    <div className="single-contact">
                        <img src="address.png" className="contact-clipart"></img>
                        <h4>L-2/625, Vineet Khand, Gomti Nagar, Lucknow, 226010</h4>
                    </div>
                    <div className="single-contact">
                        <img src="phone.png" className="contact-clipart"></img>
                        <h4>+91-7376747406</h4>
                    </div>
                    <div className="single-contact">
                        <img src="email.png" className="contact-clipart"></img>
                        <h4>iqhub2018@gmail.com</h4>
                    </div>
                </div>

                <form id="contact-form" className="contact-form" onSubmit={(e) => Submit(e)}>
                    <h2 id="send-a-message">Send us a message</h2>
                    <div className="contact-form-inputs">
                        <div className="contact-form-text-email">
                            <input type="text" name="Name" placeholder="Name" required></input>
                            <input type="text" name="Phone_Email" placeholder="Phone/Email" required></input>
                        </div>
                        <textarea id="form-message" name="Message" type="text" placeholder="Message" required></textarea>
                        <input id="form-submit-btn" type="submit"></input>
                    </div>
                </form>

            </div>
    )
}