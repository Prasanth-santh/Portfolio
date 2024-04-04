import React from "react";
import './Assets/CSS/Contact.css'
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
export default class Contact extends React.Component{
    render(){
        return(
            <div className="Contact_overall" id="Contact">
                <div className="Skill_heading">
                    <h1> Contact </h1>
                    <h2> Contact</h2>
                </div>
                <div className="Contact_content_overall">
                    <div className="Contact_content_first">
                        <div className="Get_in_touch">
                            <h1>GET IN TOUCH</h1>
                            <p>If you want to get in touch with me, the best way is to send me an email at the below email Id. I check my email regularly, and I'll get back to you as soon as possible.</p>
                        </div>
                        <div className="Details_container">
                            <div className="Details_overall">
                                <div className="Details_icon">
                                    < FaMapLocationDot />
                                </div>
                                <div className="Details_content">
                                    <h1> Address</h1>
                                    <p> Velachery,Chennai-600042, Tamil Nadu, India</p>

                                </div>
                            </div>
                            <div className="Details_overall">
                                <div className="Details_icon">
                                    < MdEmail />
                                </div>
                                <div className="Details_content">
                                    <h1> Email</h1>
                                    <p> prasanthkumar072000@gmail.com</p>

                                </div>
                            </div>
                            <div className="Details_overall">
                                <div className="Details_icon">
                                    < FaPhone />
                                </div>
                                <div className="Details_content">
                                    <h1> Number</h1>
                                    <p> +91-950-097-0811</p>

                                </div>
                            </div>
                            <div className="Contact_icon">
                                <div className="Icon facebook">
                                   <a href="https://www.facebook.com/prasanth.santh.90663894"> <FaFacebookF/> </a>
                                </div>
                                <div className="Icon twitter">
                                   <a href="https://twitter.com/home"> <BsTwitterX/> </a>
                                </div>
                                <div className="Icon insta">
                                   <a href="https://www.instagram.com/"> <FaInstagram/> </a>
                                </div>
                                <div className="Icon linked">
                                   <a href="https://www.linkedin.com/in/prasanth-k-848502236/"> <FaLinkedin/> </a>
                                </div>
                                <div className="Icon git">
                                   <a href="https://github.com/"> <FaGithub/> </a>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                    <div className="Contact_me">
                        <div className="Contact_items">
                            <input placeholder="Your Name"></input>
                            <input placeholder="Your Number"></input>
                            <input placeholder="Your Email"></input>
                            <input placeholder="Your Subject"></input>
                            <textarea placeholder="Your Message"></textarea>
                            <button>Send Message</button>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}