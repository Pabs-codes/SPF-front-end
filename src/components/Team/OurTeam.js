import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


const OurTeam = ({ name, role, image, social, delay }) => {
  return (
    <div
      className="col-md-3 col-sm-3 col-xs-12  " // Adjusted column size to fit all 4 images in a row
      data-aos={"fade-up"}
      data-aos-delay={`${delay}00`}
      data-aos-duration={1000}
      style={{ marginBottom: "120px" }}
    >
      <div className=" gallery-image-hover ">
        <img
          src={require("../../assets/images/" + image)}
          className="img-fluid"
          alt={image}
        />
        <div className="">
        <h4 className="member-title mt-20 text-center">{name}</h4>
        <p className="member-subtitle text-center">{role} </p>
        <p className="member-subtitle text-center"> <FaGithub/>  <FaLinkedin/>  <FaFacebook/>  <FaInstagram/></p>

        
       
        
        </div>
        
        <div className="member-caption">
          <div className="member-description text-center">
            <div className="member-description-wrap">
              <p className="member-subtitle">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
