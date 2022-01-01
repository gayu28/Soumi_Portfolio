import React from "react";

const ModalOneBlogContent = () => {
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
          <i className="fa fa-calendar"></i> October 2021 - Present
        </span>
        <span>
          <i className="fa fa-tags"></i> deep learning, neural radiance, 3D reconstruction
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Reconstructing 3D simulations from 2D images (proceeding)</h1>
      <img src="img/blog/project1.png" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
        A novel model that takes in 2D images and processes precise depth maps to produce 3D simulations. Usually, the input of a 2D image is given from many angles, which eventually increases the storage requirements. This project aims to bring out precise 3D models with minimal views for an image. Aside from computational costs, our team looks forward to incorporating lighting effects from multiple viewpoints. Such transformation of an object or a scene in a multi-dimensional plane improves the scene understanding capabilities of machines. Also, it lays down the foundation for automated simulation in immersive technologies like Virtual Reality.
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalOneBlogContent;
