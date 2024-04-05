import React from "react";
import './Assets/CSS/Project.css';
import Boot from './Assets/Img/Bootstrap (2).png'
import Food from './Assets/Img/food hut.png';
import Cheese from './Assets/Img/gallary-9.jpg';
import Stock from './Assets/Img/crypto.png';
import pet from './Assets/Img/pet shop.png';
import { FaArrowRight } from "react-icons/fa";



export default class Project extends React.Component{
    render(){
        
        return(
            <div className="project_overall" id="project">
                <div className="project_heading">
                    <h1>Project </h1>
                    <h2>Project</h2>
                </div>
                <div className="Project_content">
                       <a href="  https://prasanth-santh.github.io/Bootstrap-Project/" className="Project_img1">
                        <img src={Boot}/>
                            <div className="Project_img1_content">
                                <a href=" https://prasanth-santh.github.io/project/"> BOOTSTRAP </a>
                                <p>et started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.</p>
                            
                            </div>
                            <button><a href="  https://prasanth-santh.github.io/Bootstrap-Project/"> Click <i><FaArrowRight/></i></a></button>
                        </a> 
                       <a href=" https://prasanth-santh.github.io/project/"  className="Project_img2">
                            <img src={Food}/>
                            <div className="Project_img1_content">
                                <a href=" https://prasanth-santh.github.io/project/">FOOD HUT</a>
                                <p>Food Hut is a Varanasi based restaurant brand that provides high quality veg & non-veg food. It's a newly started brand that serves North Indian, Italian and Chinese cuisine.  </p>

                            </div>
                            <button><a href=" https://prasanth-santh.github.io/project/"> Click <i><FaArrowRight/></i></a></button>
                        </a> 

                </div>
                <div className="Project_content">
                        <a href=" https://prasanth-santh.github.io/group-project/"  className="Project_img2 alternate1">
                        <img src={Stock}/>
                            <div className="Project_img1_content">
                                <a href="https://prasanth-santh.github.io/group-project/"> STOCK MARKET </a>
                                <p>A stock market, equity market, or share market is the aggregation of buyers and sellers of stocks (also called shares), which represent ownership claims on businesses; these may include securities listed on a public stock exchange as well as stock that is only traded privately</p>

                            </div>
                            <button><a href=" https://prasanth-santh.github.io/group-project/" > Click <i><FaArrowRight/></i></a></button>
                        </a> 
                       <a href=" https://prasanth-santh.github.io/project/"  className="Project_img1 alternate2">
                       <img src={pet}/>
                            <div className="Project_img1_content">
                                <a href=" https://prasanth-santh.github.io/project/">PET SHOP </a>
                                <p>Every pround pet parent rembers the joy and excitement of the first welcoming their dog to their family and home</p>

                            </div>
                            <button><a href=" https://prasanth-santh.github.io/project/"> Click <i><FaArrowRight/></i></a></button>
                        </a> 
                </div>

            </div>
        )
    }
}