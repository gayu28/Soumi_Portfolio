import React from "react";

const ModalSixBlogContent = () => {
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
          <i className="fa fa-calendar"></i> April 2020 - May 2020
        </span>
        <span>
          <i className="fa fa-tags"></i> Machine Learning, Classification, Regression
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <div className="link">
      <h1>Two stage flight delay prediction<a href="https://github.com/sowmiya-2805/Flight_delay_prediction"><i class="fa fa-link" aria-hidden="true"></i></a> </h1>
  </div>


      {/* <h1>Two stage flight delay prediction</h1> */}
      <img src="img/blog/project6.png" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
        The project's main goal is to predict the arrival delay of the flights across 15 stations in the US. A two-stage model was built, which classifies delays in the former stage and predicts the duration of delays in the latter. Strong and robust predictive models were built through ensemble techniques and regularization. The best-analyzed classifier had 89% recall score and the best regressor had 93.5% r2 score. 
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalSixBlogContent;
