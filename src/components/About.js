import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';
import me from '../images/sarahs.jpg'


class About extends Component {
    state = {}
    render() {
            return ( 
            <div className = 'about' >
                <div className = 'about-content'>
                <h1> <Fade bottom cascade> About Me </Fade></h1>
                <Fade bottom>
                <p> { data.abouttext } </p> 
                </Fade> 
                <img src={me} alt="hello"></img>
                </div> 
                    {/* data.ShowAboutImage ? <img src = { data.aboutImage }
                    alt = 'about image' > </img> : null} 
                    ); */}

                </div>
            );
            }
        }
            export default About;