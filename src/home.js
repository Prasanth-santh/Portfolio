import React from "react";
import './Assets/CSS/Home.css';
import Profile from  './Assets/Img/profile3.jpg';
import Resume from './Assets/Prasanth k.pdf'

 export default class Home extends React.Component{
    render(){
        return(
            <div className="Home_design" id="Home">
                <div className="Home_content">
                    <h2> HELLO !</h2>
                    <h1> I'm <span className="cyan"> Prasanth </span></h1>
                    {/* <h1> FullStack Developer <span className="cyan"> Web Designer </span></h1> */}
                    <h3></h3>
                    <div className="hire_but">
                        <button> <a href="#About">HIRE ME</a></button>
                        <button> <a href={Resume} download>Download Resume</a></button>

                    </div>
                </div>
                    <div className="Img-overall">
                        <div className="Img_container">
                            <div className="Animated_rotate"></div>
                        </div>
                        <div className="Img_content">
                            <img src={Profile}/>
                        </div>
                    </div>
            </div>
        )
    };
};