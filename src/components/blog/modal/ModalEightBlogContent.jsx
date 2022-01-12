import React from "react";

const ModalEightBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
          Project <span>Details</span>
        </h1>
        <span className="title-bg">projects</span>
      </div>
      {/* Meta Starts */}

      <div className="meta open-sans-font">
        <span className="date">
          <i className="fa fa-calendar"></i> September 2020 - November 2020
        </span>
        <span>
          <i className="fa fa-tags"></i> OOAD, UML
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <div className="link">
      <h1>Structures planning facilitation system<a href="https://github.com/sowmiya-2805/Structures_planning_facilitation_system"><i class="fa fa-link" aria-hidden="true"></i></a> </h1>
  </div>

      {/* <h1>Structures planning facilitation system</h1> */}
      <img src="img/blog/project8.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
        The proposed system is driven by Object-Oriented Analysis and Design, ensuring that every client gets access to experienced architects and reliable constructors according to their taste of interest. The stakeholders of the system are the Client, Architect, and Builder. The platform gets many opportunities for architects and builders. At the same time, it provides the client with quality architects and builders to get their structures built. Inspired by the idea of Autodesk to generate 3d models, the system makes it possible to transform the building plans in 2d to a 3d simulation for a better understanding of ideas. The client can understand the architect’s work better, and the builder can understand the building plan much better for construction works. 
        </p>
        
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalEightBlogContent;
