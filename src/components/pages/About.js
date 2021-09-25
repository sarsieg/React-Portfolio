import React from 'react';
import pg1 from '../images/0001.jpg';
import pg2 from '../images/0002.jpg';
import pg3 from '../images/0003.jpg';
import pg4 from '../images/0004.jpg';


export default function About() {
  return (
    <div className = 'about' >
                <div className = 'about-content'>
                <img src={pg1} alt="page 1"></img>
                <img src={pg2} alt="page 2"></img>
                <img src={pg3} alt="page 3"></img>
                <img src={pg4} alt="page 4"></img>
                </div> 
                </div>
    // <div>
    //   <h1>About Page</h1>
    //   <p>
    //     Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
    //     Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
    //     mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
    //     lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
    //     imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
    //     in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
    //   </p>
    // </div>
  );
}
