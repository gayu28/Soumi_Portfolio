import React from "react";

const ModalTwoBlogContent = () => {
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
          <i className="fa fa-calendar"></i> August 2021 - Present
        </span>
        <span>
          <i className="fa fa-tags"></i> deep learning, image processing, time series forecast
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Urbanization mapping using satellite imagery analysis(on-going)</h1>
      <img src="img/blog/project2.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p align="justify">
        A deep learning model that performs time series analysis to get insights into urbanization trends in metropolitan cities from satellite images. This is essentially a comparison strategy that detects the change to model patio-temporal relationships. Work in this domain has been spread across many applications, such as weather forecast prediction and natural calamity recovery. Our focus on mapping urbanization trends arises from the awareness about the impacts and overcoming the difficulties of conventional methods of satellite imagery analysis.
        </p>
        {/* <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
            Most photographers find it hard to see interesting pictures in
            places in which they are most familiar. A trip somewhere new seems
            always exactly what our photography needed, as shooting away from
            home consistently inspires us to new artistic heights.
          </p>
        </div> */}
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalTwoBlogContent;
