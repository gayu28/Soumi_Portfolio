import React from "react";

const personalInfoContent = [
  { meta: "Name", metaInfo: "Sowmiya Shubbarayan" },
  { meta: "Age", metaInfo: "21 Years" },
  { meta: "Nationality", metaInfo: "Indian" },
  { meta: "Degree", metaInfo: "Bachelors" },
  { meta: "langages", metaInfo: "English, Tamil" },
  { meta: "phone", metaInfo: "+916383585099" },
  { meta: "Location", metaInfo: "Chennai, India" },
  { meta: "Email", metaInfo: "soumiya2805@gmail.com" },
  
  
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
