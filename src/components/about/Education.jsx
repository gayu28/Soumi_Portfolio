import React from "react";

const educationContent = [
  {
    year: "2018-Present",
    degree: "BACHELORS OF ENGINEERING",
    institute: "CEG, ANNA UNIVERSITY",
    details: `Majors in computer science specializing in Software engineering and Machine Learning`,
  },
  {
    year: "2016-2018",
    degree: "HIGHER SECONDARY",
    institute: "BHARATHI VIDYA BHAVAN",
    details: ``,
  },
  {
    year: "2014-2016",
    degree: "HIGH SCHOOL",
    institute: "THE BVB SCHOOL",
    details: `Cheerful school days when I was excelling in arts and beginning to explore computers`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
