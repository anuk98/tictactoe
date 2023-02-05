import React from 'react'
import './Home.css'
import code from '../../assets/coding.png'
import {FaGithub, FaHtml5, FaInstagram, FaJava, FaLinkedin} from 'react-icons/fa'
import {
    FaCss3Alt,
    FaJs,
    FaReact,
    FaPython,
  } from "react-icons/fa";
function Home() {
  return (
    <div className='home' id='home'>
        <div className="home_container">
            <div className="left">
              <div className="left_container">
              <h3>Welcome To My World</h3>
                <h1>
                    Hi,Iam <span className='title'>Anoop</span>
                </h1>
                <p>jhj sajshjah ajshha ipsum lorem</p>
                <div className="home_btn d_flex">
                    <div className="col_1">
                        <h4>Find me on</h4>
                        <button className='btn_shadow'>
                        <FaLinkedin className='icon'/>
                        </button>
                        <button className='btn_shadow'>
                        <FaGithub className='icon'/>
                        </button>
                        <button className='btn_shadow'>
                        <FaInstagram className='icon'/>
                        </button>
                    </div>
                </div> 

              </div>
                
            </div>
           <div className="right">
            <div className="right_top_container">
              <div className="right_img">
                <img src={code} alt="" />
              </div>
            </div>
            <div className="right_bottom_container">
                      <p > Skills</p>
            <div className='skill_container'>
                  <div className='skill'>
                  <FaCss3Alt className='skill_icon css_icon'/>
                  </div>
                  <div className='skill'>
                  <FaHtml5 className='skill_icon html_icon'/>
                  </div>
                  <div className='skill'>
                  <FaJs className='skill_icon js_icon'/>
                  </div>
                  <div className='skill'>
                  <FaReact className='skill_icon react_icon'/>
                  </div>
                  <div className='skill'>
                  <FaPython className='skill_icon python_icon'/>
                  </div>
              </div>
            </div>
           </div>
           
        </div>
        
    </div>
  )
}

export default Home