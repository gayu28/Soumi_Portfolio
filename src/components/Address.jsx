import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>193/B1, Charan Abode, Sakthi Nagar East extension, Thindal, Erode 638012
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-linkedin position-absolute"></i>
        <span className="d-block">Get linked</span>{" "}
        <a href="https://www.linkedin.com/in/sowmiya2805/">soumiya2805</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:soumiya2805@gmail.com">soumiya2805@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}


      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: +91 6383585099">+91 6383585099</a>
      </p>
    </>
  );
};

export default Address;
