import React from "react";

const ModalFourBlogContent = () => {
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
          <i className="fa fa-calendar"></i> January 2021 - May 2021
        </span>
        <span>
          <i className="fa fa-tags"></i> Brain tumor segmentation, Mesh generation, 3D print
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <div className="link">
      <h1>3D print model generation from biomedical images <a href="https://github.com/sowmiya-2805/3D_Model_from_MRI"><i class="fa fa-link" aria-hidden="true"></i></a> </h1>
  </div>


      {/* <h1>3D print model generation from biomedical images</h1> */}
      <img src="img/blog/project4.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
        The prime idea is to generate a workflow that can be used to convert volumetric medical imaging data (MRI and CT images) to 3D models. Our work focuses on implementing advanced segmentation algorithms capable of detecting smaller structures and separating boundary regions precisely (patient-specific). The volumetric segmentation is followed by mesh refinement, which focuses on repairing, smoothing, and appending with other related segments. This post-processing of the segments is expected to generate clean deliverables for 3D model generation. Software like Autodesk Meshmixer is used for refining and visualizing 3D models.
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalFourBlogContent;
