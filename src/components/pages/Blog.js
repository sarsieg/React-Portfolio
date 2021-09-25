import React from 'react';
import data from '../../data';

function Project (props) {
      return (
              <div className='project'>
                  <h1>{props.title}</h1>
                  
                  <a href={props.url}>
                      <img src={props.imageSrc} alt={props.title}></img>
                  </a>
                  <span>{props.service}</span>
              </div>
          
      );
  } 


export default function Blog() {
  return (
    <div>
    <h1 className='heading'>
    </h1>
    <div className='work-content'>
        {data.projects.map((project)=>(
            <Project key={project.id} 

            title = {project.title}

            service = {project.service}

            imageSrc = {project.imageSrc}

            url = {project.url}
            ></Project>                ))}
    </div>
</div>
    // <div>
    //   <h1>Blog Page</h1>
    //   <p>
    //     Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
    //     Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
    //     dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
    //     sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
    //     sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
    //     vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
    //     libero. Class aptent taciti sociosqu ad litora torquent per conubia
    //     nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
    //     lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    //     Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
    //     in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
    //     bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
    //     est ligula suscipit velit, sed bibendum turpis dui in sapien.
    //   </p>
    // </div>
  );
}
