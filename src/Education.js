import React from "react";
import './Assets/CSS/Education.css'

export default class Education extends React.Component{
    render(){
        return(
            <div className="Eduction_overall" id="Education">
                <div className="Eduction_heading">
                    <h1> Education </h1>
                    <h2>Education</h2>
                </div>
                <div className="Education_line">
                <div className="Education_content_overall overall1 left">
                    <div className="Education_content ">
                        <h1> VELS VIDHYASHARAM HR SEC SCHOOL</h1>
                        <h2> SSLC-83.6%</h2>
                        <h3>2015-2016 </h3>
                    </div>
                </div>
                <div className="Education_content_overall overall2 right">
                    <div className="Education_content ">
                        <h1> VELS VIDHYASHARAM HR SEC SCHOOL</h1>
                        <h2> HSC-83.6%</h2>
                        <h3>2016-2018 </h3>
                    </div>
                </div>
                <div className="Education_content_overall overall3 left">
                    <div className="Education_content ">
                        <h1> ARUNAI ENGINEERING COLLEGE</h1>
                        <h2> CGPA-78.9</h2>
                        <h3>2018-2022 </h3>
                    </div>
                </div>
                <div className="Education_content_overall overall4 right">
                    <div className="Education_content ">
                        <h1> LOGIN 360</h1>
                        <h2> JAVA FULLSTACK DEVELOPER</h2>
                        <h3>2023-2024 </h3>
                    </div>
                </div>
                </div>
            </div>
        )
    };
};