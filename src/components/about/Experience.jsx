import React from "react";

const experienceContent = [
  {
    year: "   FEB 2021 - Present",
    position: "RESEARCH INTERN",
    compnayName: "IIT Madras Research Park",
    details: `Simulating 3D models in Unity 3D for surgeon training`,
    location: 'Chennai, India'
  },
  {
    year: "APR 2020 - Present",
    position: "WEB DESIGNER & DEVELOPER",
    compnayName: "Mara Vascular and Interventional Radiology",
    details: `Designed and Developed website aside from AWS server maintenance`,
    location: 'Oaklahoma, US'

  },
  {
    year: "APR 2020 - Present",
    position: "RESEARCH & TEACHING ASSISTANT",
    compnayName: "Solarillion Foundation",
    details: `Core research on behavioral analysis and Image processing aside from guiding students with research direction`,
    location: 'Chennai, India'

  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
         <h5> <i class="fa fa-map-marker" aria-hidden="true"></i> {val.location} </h5>
         

        </li>
      ))}
    </ul>
  );
};

export default Experience;
