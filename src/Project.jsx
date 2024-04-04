import React from "react";
import './Assets/CSS/Project.css';
import Boot from './Assets/Img/Bootstrap (2).png'
import Burger from './Assets/Img/feature-1.jpg';
import Cheese from './Assets/Img/gallary-9.jpg';
import Stock from './Assets/Img/crypto.png';
import Juice from './Assets/Img/feature-2.jpg';



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
                       
                        </a> 
                       <a href=" https://prasanth-santh.github.io/project/"  className="Project_img2">
                            <img src={Cheese}/>
                            <div className="Project_img1_content">
                                <a href=" https://prasanth-santh.github.io/project/"> CHEESE BURGER </a>
                                <p>A cheeseburger is a hamburger with a slice of melted cheese on top of the meat patty, added near the end of the cooking time. Cheeseburgers can include variations in structure, ingredients and composition. </p>

                            </div>
                        </a> 

                </div>
                <div className="Project_content">
                        <a href=" https://prasanth-santh.github.io/group-project/"  className="Project_img2 alternate1">
                        <img src={Stock}/>
                            <div className="Project_img1_content">
                                <a href="https://prasanth-santh.github.io/group-project/"> STOCK MARKET </a>
                                <p>A stock market, equity market, or share market is the aggregation of buyers and sellers of stocks (also called shares), which represent ownership claims on businesses; these may include securities listed on a public stock exchange as well as stock that is only traded privately</p>

                            </div>
                        </a> 
                       <a href=" https://prasanth-santh.github.io/project/"  className="Project_img1 alternate2">
                       <img src={Juice}/>
                            <div className="Project_img1_content">
                                <a href=" https://prasanth-santh.github.io/project/">MOJITOS </a>
                                <p>When preparing a mojito, fresh lime juice is added to sugar (or to simple syrup) and mint leaves. The mixture is then gently mashed with a muddler. </p>

                            </div>
                        </a> 
                </div>

            </div>
        )
    }
}