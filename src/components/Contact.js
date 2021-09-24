import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';

class Contact extends Component {
    state = {  }
    render() {
        return ( <div>

            <h1>
            <Fade bottom cascade>Contact</Fade>
            </h1>
            <Fade bottom>
                <div className = 'contact-content'>
                    <a href = { `mailto:${data.contactEmail}` }
            className = 'email'>{data.contactEmail}</a>
            <ul>

            {data.social.map((link, index) => ( 
                <li key = { index } > <a target = '_blank'
                    rel = "noopener noreferrer"
                    href = { link.url } > { link.name }</a></li>
                ))} 
                </ul> 
                </div> 
                </Fade>

                <div className="myForm">
            <form id="email-form" action="https://formspress.io/xknqqwdl" method="POST">
                <div className="form-group">
                    <label for="form-name">Name</label>
                    <input type="text" name="name" className="form-control" id="form-name"  placeholder="Your Name"></input>
                </div>
                <div className="form-group">
                    <label for="form-email">Email</label>
                    <input type="email" name="replyEmail" className="form-control" id="form-email" placeholder="email@you.com"></input>
                </div><div className="form-group">
                    <label for="message">Message</label>
                    <textarea className="form-control" name="messageBody" id="form-body" rows="3"></textarea>
                </div>
            </form>
            <center><button type="submit" className="btn btn-secondary btn-sm" id="submit">SUBMIT</button></center>
            <p id="form-status"></p>
        </div>

            <span className = 'footer' > React Website Design < a href = "https://sarsieg.github.io/Finalized-Professional-Portfolio/" > Sarah's Original Website</a></span> </div>);
        }
    }

    export default Contact;