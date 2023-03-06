import React from "react";
import "./Projects.css";
import { FaReact, FaUnsplash, FaFreeCodeCamp } from "react-icons/fa";
import {
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPug
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import doctrack from "../../assets/doctrack.PNG";
import quote from "../../assets/quote.PNG";
import markdown from "../../assets/markdown.PNG";
import tour from "../../assets/tour.PNG";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={doctrack}
                    alt="TUP Doctrack"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>TUP Doctrack</h2>
                <p>
                  TUP Doctrack is a web-based printing system that was developed to solve the queuing problems with printing services at the Technological University of the Philippines by providing a fast and reliable printing system.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiPug />
                  <DiCss3 />
                  <SiJavascript />
                  {/* <SiMaterialui /> */}
                </div>
                <div>
                  <a
                    href="https://tup-doctrack.up.railway.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/hyaxsuzy/doctrack"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={quote}
                    alt="quote"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Random Quote Machine</h2>
                <p>
                  A quote machine that displays a random quote whenever the new quote button is clicked. It can copy and paste, and tweet the current quote. Also, it can read and speak by using the speech synthesis utterance. 
                  {/* Aside from the buttons color changing, I added background images to change as well by using unsplash API. */}
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <SiJavascript />
                  <FaUnsplash />
                </div>
                <div>
                  <a
                    href="https://quote-generator-production.up.railway.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/hyaxsuzy/quote-generator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={markdown} alt="markdown" />
                </div>
              </div>
              <div className="project_information">
                <h2>Markdown Previewer</h2>
                <p>
                  Markdown previewer first loads, the default text contain valid markdown that represents each element such as heading, sub heading, link, inline code, code block, list item, blockquote, image, and bolded text.
                </p>
                <div>
                  <FaReact />
                  <FaFreeCodeCamp />
                </div>
                <div>
                  <a
                    href="https://markdown-previewer-production.up.railway.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/hyaxsuzy/markdown-previewer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={tour}
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>El Nido Tour Packages</h2>
                <p>
                  A work in progress tour agency web application based on El Nido Paradise website.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <DiCss3 />
                  <SiHtml5 />
                  <SiJavascript />
                </div>
                {/* <div>
                  <a
                    href="https://search-app-production.up.railway.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Link
                    </span>
                  </a>
                  <a
                    href="https://github.com/hyaxsuzy/Search-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
