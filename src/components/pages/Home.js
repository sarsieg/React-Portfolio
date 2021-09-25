import React from 'react';
import me from '../images/sarahs.jpg';
import data from "../../data";

export default function Home() {
  return (
    <div className = 'about' >
                <div className = 'about-content'>
                <h1> About Me</h1>
                <p> { data.abouttext } </p> 
                
                <img src={me} alt="hello"></img>
                </div> 
                    {/* data.ShowAboutImage ? <img src = { data.aboutImage }
                    alt = 'about image' > </img> : null} 
                    ); */}

                </div>
    // <div>
    //   <h1>Home Page</h1>
    //   <p>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
    //     velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
    //     ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
    //     non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
    //     ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
    //     rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
    //     tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
    //     porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
    //     vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
    //     fames ac ante ipsum primis in faucibus.
    //   </p>
    // </div>
  );
}
