import React from "react";

const ModalThreeBlogContent = () => {
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
          <i className="fa fa-calendar"></i> September 2020 - July 2021
        </span>
        <span>
          <i className="fa fa-tags"></i> Fake news detection, Multi-head attention, Graph Neural Networks
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}
    <div className="link">
      <h1>SOMPS-Net <a href="https://github.com/sowmiya-2805/SOMPS-Net-Social-graph-framework-for-fake-health-news-detection"><i class="fa fa-link" aria-hidden="true"></i></a>  </h1>
  </div>
      <img src="img/blog/project3.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
        A novel graph-based framework SOcial graph with Multi-head attention and Publisher information and news Statistics Network abbreviated as SOMPS-Net. It is essentially a graph-based solution that utilizes user network information for a given news article to predict its veracity at early stages.
        </p>
        <p>The architecture is split into two main components. One is the social interaction graph which captures the network information via Graph Neural Networks. The second component is the Publisher and News statistics which encompasses details like a lifetime of news articles and an average rating of the publisher that cannot be fabricated for a long time.</p>
        <p>The traditional approaches to detect fake medical news that uses an article's content and linguistic features. It is important to note that such content can easily be manipulated and made to look real with today's enhanced technologies. With relevant information, the model outperformed other existing models by a large margin, strengthening our emphasis on graphs and publisher statistics.</p>      
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalThreeBlogContent;
