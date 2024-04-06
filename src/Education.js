import React from "react";
import './Assets/CSS/Education.css'
import { FaGraduationCap } from "react-icons/fa";

export default class Education extends React.Component{
    render(){
        return(
            <div className="Eduction_overall" id="Education">
                <div className="Eduction_heading">
                    <h1> Education </h1>
                    <h2>Education</h2>
                </div>
                {/* <div className="Education_line">
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
                </div> */}
                 <div className="education">
                    <div className="edu-details">
                        <p>2024-PRESENT</p>
                        <p>web developer <span>- Login 360</span></p>
                        <p>I designed some frond-end templates. And I workded with CSS and Bootstrap for designing UI. Then I am also worked in frond-end frameworks like React Js. I have done some API integration in small Projects.</p>
                        <FaGraduationCap className="grad-cap"/>
                    </div>

                    <div className="edu-details">
                        <p>2018 - 2022</p>
                        <p>B.Tech (IT) <span>- AEC</span></p>
                        <p>I Completed B.Tech - Information Technology, at Arunai  Engineering College ,Tiruvannamalai.With 7.89 CGPA </p>
                        <FaGraduationCap className="grad-cap"/>
                    </div>

                    <div className="edu-details">
                        <p>2016 - 2018</p>
                        <p>HSC <span>- VVMHSS</span></p>
                        <p> I Completed Higher Secondary Education at Vels Vidhyasharam Matric Higher Seondary School, Kannamangalam, with the percentage of 73</p>
                        <FaGraduationCap className="grad-cap"/>
                    </div>

                    <div className="edu-details">
                        <p>2015 - 2016</p>
                        <p>SSLC <span>- VVMHSS</span></p>
                        <p> I Completed Secondary School Leaving Certificate at Vels Vidhyasharam  Matric Higher Seondary School, Kannamangalam, with the percentage of 83.6 </p>
                        <FaGraduationCap className="grad-cap"/>
                    </div>


                </div>

            </div>
        )
    };
};