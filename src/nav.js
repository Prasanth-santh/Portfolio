import React from "react";
import './nav.css'
import { FaBars } from "react-icons/fa6";
import { TbLetterX } from "react-icons/tb";
import { TbSquareLetterP } from "react-icons/tb";
import Pletter from './Assets/Img/pletter1.png'
// import { Link } from "react-router-dom";

export default class Nav extends React.Component{
    constructor(){
        super();
        this.pass=true;
        this.state={icon:<FaBars/>};
        this.show=this.on.bind(this);
    }
    on(){
        (this.pass=!this.pass)? 
        this.setState({icon:<FaBars/>}):
        this.setState({icon:<TbLetterX/>}); 
    }
    render(){
        return(
            <div className="navbar">
                <h1> <img src={Pletter}/>RASANTH</h1>
                <label for="box" onClick={this.show}> 
                    {this.state.icon}
                    </label>
            <input type="checkbox" id="box"/>
                <div className="component">
                    {/* <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/service">Service</Link>
                    <Link to="/contact">Contact</Link> */}
                    <a href="#Home" className="link">Home</a>
                    <a href="#About" className="link">About</a>
                    <a href="#Education" className="link">Education</a>
                    <a href="#Skills" className="link">Skills</a>
                    <a href="#project" className="link">Project</a>
                    <a href="#Contact" className="link">Contact</a>
                </div>
            </div>
        )
    };
};