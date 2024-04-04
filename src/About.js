import React from "react";
import './Assets/CSS/About.css'
import Profile2 from './Assets/Img/profile2.jpg'

export default class About extends React.Component{
    render(){
        return(
            <div className="About_overall" id="About">
                <div className="About_content">
                    <div className="About-pic">
                        <img src={Profile2}/>
                    </div>
                    <div className="About_me">
                        <h1> About</h1>
                        <h2> ABOUT ME</h2>
                        <p>I'm professional Web Developer & Web Designer based working on different projects.</p>
                        <div className="Personal_info">
                            <div className="personal_info_key">
                                    <h3> Name:</h3>
                                    <h3> Birthday:</h3>
                                    <h3> Language:</h3>
                                    <h3> Address:</h3>
                                    <h3> Email:</h3>
                                    <h3> Phone:</h3>
                            </div>
                            <div className="personal_info_value">
                                    <h3> Prasanth</h3>
                                    <h3> August 07/2000</h3>
                                    <h3> English,Tamil</h3>
                                    <h3> Chennai</h3>
                                    <h3> prasanthkumar072000@gmail.com</h3>
                                    <h3> 9500970811</h3>
                            </div>

                        </div>
                        <div className="rotate1"></div>
                        <div className="rotate2"></div>
                    </div>
                </div>

            </div>
        )
    }
}