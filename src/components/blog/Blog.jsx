import React, { useState } from "react";
import Modal from "react-modal";

import ModalOneBlogContent from "./modal/ModalOneBlogContent";
import ModalTwoBlogContent from "./modal/ModalTwoBlogContent";
import ModalThreeBlogContent from "./modal/ModalThreeBlogContent";
import ModalFourBlogContent from "./modal/ModalFourBlogContent";
import ModalFiveBlogContent from "./modal/ModalFiveBlogContent";
import ModalSixBlogContent from "./modal/ModalSixBlogContent";
import ModalSevenBlogContent from "./modal/ModalSevenBlogContent";
import ModalEightBlogContent from "./modal/ModalEightBlogContent";
import ModalNineBlogContent from "./modal/ModalNineBlogContent";

Modal.setAppElement("#root");

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }
  function toggleModalSeven() {
    setIsOpen7(!isOpen7);
  }
  function toggleModalEight() {
    setIsOpen8(!isOpen8);
  }
  function toggleModalNine() {
    setIsOpen9(!isOpen9);
  }

  return (
    <>
      {/* Blog 1 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalOne}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/project1.png"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>Reconstructing 3D simulations from 2D images</h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              A neural model for transforming 2D images to 3D models from minimal input (views) to improve machines' cognition
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalOneBlogContent */}
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalOneBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalOneBlogContent */}
      </div>
      {/*  Blog 1 Ends */}

      {/*  Blog 2 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalTwo}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/project2.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>Urbanization mapping using satellite imagery analysis</h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              A deep learning network that processes and analyses satellite images to get insights into the trends of urbanization over a few years
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalTwoBlogContent */}
        <Modal
          isOpen={isOpen2}
          onRequestClose={toggleModalTwo}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalTwo}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalTwoBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalTwoBlogContent */}
      </div>
      {/*  Blog 2 Ends */}

      {/*  Blog 3 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalThree}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/project3.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>SOMPS-Net</h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              A graph-based model which predicts fake medical news in early stages with social network information and publisher and news statistics
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalThreeBlogContent */}
        <Modal
          isOpen={isOpen3}
          onRequestClose={toggleModalThree}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalThree}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalThreeBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalThreeBlogContent */}
      </div>
      {/* Blog 3 Ends */}

      {/* Blog 4 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalFour}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/project4.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>3D print model generation from biomedical images</h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              A Workflow that combines image segmentation & 3D simulations to extract tumor from MRI brain scans & devise models capable of 3D printing
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalFourBlogContent */}
        <Modal
          isOpen={isOpen4}
          onRequestClose={toggleModalFour}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalFour}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalFourBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalFourBlogContent */}
      </div>
      {/* Blog 4  Ends */}

      {/*  Blog 5 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalFive}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/project52.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>Semantic analysis of tweets using lexicals & semantics</h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              Machine Learning model to analyze the reach of an entity via sentiment analysis of tweets fetched in real-time using lexical and semantic concepts
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalFiveBlogContent */}
        <Modal
          isOpen={isOpen5}
          onRequestClose={toggleModalFive}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalFive}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalFiveBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalFiveBlogContent */}
      </div>
      {/*  Blog 5 Ends */}

      {/* Blog 6 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalSix}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/project6.png"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>Two Stage Flight delay predictor</h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              A two stage machine learning model which classifies if a flight is delayed or not in the former stage and predicts the duration of delays in the latter.
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalSixBlogContent */}
        <Modal
          isOpen={isOpen6}
          onRequestClose={toggleModalSix}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalSix}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalSixBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalSixBlogContent */}
      </div>
      {/* Blog 6 Ends */}
      {/* Blog 7 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalSeven}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/project7.jpeg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>Xceed, CTF, CEG</h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              Designed and coded the UI/UX for Xceed, the outreach program of the CEG Tech Forum of CEG, Anna University, Chennai
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalSixBlogContent */}
        <Modal
          isOpen={isOpen7}
          onRequestClose={toggleModalSeven}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalSeven}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalSevenBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalSixBlogContent */}
      </div>
      {/* Blog 7 Ends */}
      {/* Blog 8 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalEight}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/project8.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>Structures planning facilitation system</h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              An object oriented design aimed to connect the public to architects and constructors to get properly planned and executed buildings. 
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalSixBlogContent */}
        <Modal
          isOpen={isOpen8}
          onRequestClose={toggleModalEight}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalEight}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalEightBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalSixBlogContent */}
      </div>
      {/* Blog 8 Ends */}
      {/* Blog 9 Starts */}
      <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30">
        <article className="post-container" onClick={toggleModalNine}>
          <div className="post-thumb">
            <div className="d-block position-relative overflow-hidden">
              <img
                src="img/blog/project9.jpg"
                className="img-fluid"
                alt="Blog Post"
              />
            </div>
          </div>
          {/* End .thumb */}
          <div className="post-content">
            <div className="entry-header">
              <h3>Overseas@22</h3>
            </div>
            <div className="entry-content open-sans-font">
              <p>
              A DBMS with real-world data regarding top technologies and universities offering them to guide aspiring students to achieve their graduate dreams
              </p>
            </div>
          </div>
          {/* End .post-content */}
        </article>

        {/* Start ModalSixBlogContent */}
        <Modal
          isOpen={isOpen9}
          onRequestClose={toggleModalNine}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalNine}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner blog-post">
              <ModalNineBlogContent />
            </div>
          </div>
        </Modal>
        {/* End  ModalSixBlogContent */}
      </div>
      {/* Blog 9 Ends */}
    </>
  );
};

export default Blog;
