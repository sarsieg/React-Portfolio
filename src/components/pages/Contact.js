import React from 'react';
import data from '../../data'

export default function Contact() {
  return (
    <div>

            <h1>
            Contact
            </h1>
            
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
    // <div>
    //   <h1>Contact Page</h1>
    //   <p>
    //     Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
    //     molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
    //     magna a ultrices. Aenean pellentesque placerat lacus imperdiet
    //     efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
    //     mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
    //     posuere, eget tristique dui dapibus. Maecenas fermentum elementum
    //     faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
    //     ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
    //     dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
    //     conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
    //     rhoncus. Etiam vel condimentum magna, quis tempor nulla.
    //   </p>
    // </div>
  ;
}
