import React from "react";

const ModalSevenBlogContent = () => {
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
          <i className="fa fa-calendar"></i> January 2021 - March 2021
        </span>
        <span>
          <i className="fa fa-tags"></i> UI/UX, Front-end development
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <div className="link">
      <h1>Xceed<a href="http://xceed.kurukshetraceg.org.in/"><i class="fa fa-link" aria-hidden="true"></i></a> </h1>
  </div>

      {/* <h1>Xceed</h1> */}
      <img src="img/blog/project7.jpeg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p align="justify">
        Designed UI/UX for the website of Xceed, the outreach program of the CEG Tech Forum of Anna University. 
</p>
<p>
{/* <a href="http://xceed.kurukshetraceg.org.in/" target='_blank'>http://xceed.kurukshetraceg.org.in/</a> */}

        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalSevenBlogContent;
