import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/hya.JPG";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="zoom-in">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Hyacinth Escosura </span> and I am
                from{" "}
                <span className="different"> Bacoor, Cavite (Philippines)</span>
                . I have completed my graduation with a bachelor's degree in{" "}
                <span className="different">
                  Computer Engineering Technology
                </span>{" "}
                from the{" "}
                <span className="different">
                  Technological University of the Philippines (Manila)
                </span>
                . I have interned as a{" "}
                <span className="different">Web App Developer</span> at a tech
                company in Ortigas, Pasig.
              </h4>
              {/* <h4>Terms that can describe me apart form coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Creative{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Flexible{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cat Person{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Adventurous{" "}
              </h4> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
