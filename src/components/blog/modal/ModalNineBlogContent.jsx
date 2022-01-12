import React from "react";

const ModalNineBlogContent = () => {
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
          <i className="fa fa-calendar"></i> February 2020 - April 2020
        </span>
        <span>
          <i className="fa fa-tags"></i> DBMS, SQL, UI/UX
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <div className="link">
      <h1>Overseas@22<a href="#"><i class="fa fa-link" aria-hidden="true"></i></a> </h1>
  </div>

      {/* <h1>Overseas@22</h1> */}
      <img src="img/blog/project9.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
        Overseas@22 is a University admissions guidance portal designed with appropriate UI/UX and operated by DBMS techniques. It contains real-world data about the top technologies that could transform the near future and the universities offering graduate courses in them. Aside from providing information, it links them to professors for guidance and internships and counselors to help them throughout their graduate admission procedures. There are connections to coaching centers that help students clear examinations like GRE and TOEFL. The goal is to help aspiring students achieve their graduate dreams in every possible way.
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalNineBlogContent;
