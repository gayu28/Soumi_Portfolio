import React from "react";

const ModalFiveBlogContent = () => {
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
          <i className="fa fa-calendar"></i> October 2020 - December 2020
        </span>
        <span>
          <i className="fa fa-tags"></i> Sentiment prediction, Natural Language processing
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <div className="link">
      <h1>Sentiment analysis of tweets using lexicals & semantics <a href="https://github.com/sowmiya-2805/Sentiment_Analysis_of_Tweets"><i class="fa fa-link" aria-hidden="true"></i></a> </h1>
  </div>

      {/* <h1>Semantic analysis of tweets using lexicals & semantics</h1> */}
      <img src="img/blog/project52.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p align="justify">
        We analyzed the reach of an entity to the public. Twitter, being one of the most preferred microblogging sites, was chosen for the analysis. By finding out the overall sentiment from the tweets associated with the concerned entity, it became handy to calculate the entity's reach.        </p>
        <p align="justify">
        Such analysis would be crucial for the present world where business companies hugely invest and rapidly grow. The tweets were directly fetched from the platform from which the sentiments were fetched and analyzed. This was followed by building a predictive model that predicted a given tweet's sentiment.
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalFiveBlogContent;
