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
      <p align="justify">
      The system was made to help clients have access to experienced architects and reliable builders, according to their taste, and was driven by Object-Oriented Analysis and Design.        </p>
        <p align="justify">
        The stakeholders of the system are the Clients, Architects, and Builders. The platform can provide many opportunities for architects and builders. At the same time, it gives the clients access to quality architects and builders to get their structures built. Inspired by the idea of Autodesk to generate 3d models, the system makes it possible to transform the 2D building plans to 3D simulations for a better visualization. Clients can envision the architects' work, and the builders can understand.
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalEightBlogContent;
