import React from "react";

const educationContent = [
  {
    year: "2018-Present",
    degree: "BACHELORS OF ENGINEERING",
    institute: "CEG, ANNA UNIVERSITY",
    details: `Majors in Computer Science and Engineering;
    Interested in Esthetic Computing, AI, and UI/UX`,
    location: 'Chennai, India'
  },
  {
    year: "2016-2018",
    degree: "HIGHER SECONDARY",
    institute: "BHARATHI VIDYA BHAVAN",
    details: `Secured 96.75% in Science stream; Held responsibility as a House Captain`,
    location: 'Erode, India'

  },
  {
    year: "2014-2016",
    degree: "HIGH SCHOOL",
    institute: "THE BVB SCHOOL",
    details: `Cheerful school days when I was excelling in arts; Began to explore computers`,
    location: 'Erode, India'

  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
          <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                     </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
          <h5> <i class="fa fa-map-marker" aria-hidden="true"></i> {val.location} </h5>

        </li>
      ))}
    </ul>
  );
};

export default Education;
