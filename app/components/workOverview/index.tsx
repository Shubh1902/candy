import React from "react";
import "./index.css";
import Link from "next/link";
import nurtureLogo from "./nurture.png";
import talenticaLogo from "./talentica.svg";
import zebraLogo from "./zebra.png";
import Image from "next/image";
import zebraBackground from "./zebra.jpeg";
import nurtureBackground from "./nurture-background.jpeg";
import talenticaBackground from "./talentica-background.jpeg";
const WORK_DATA = [
  {
    id: "nurture",
    name: "nurture.farm",
    logo: nurtureLogo,
    background: talenticaBackground,
    tenure: {
      startDate: new Date(2021, 8, 1),
      endDate: new Date(2024, 1, 1),
    },
    position: "Technical Lead",
  },
  {
    id: "nurture2",
    name: "nurture.farm",
    logo: nurtureLogo,
    background: talenticaBackground,
    tenure: {
      startDate: new Date(2021, 8, 1),
      endDate: new Date(2024, 1, 1),
    },
    position: "Senior Software Engineer",
  },
  {
    id: "talentica",
    name: "Talentica Software",
    logo: talenticaLogo,
    background: talenticaBackground,
    tenure: {
      startDate: new Date(2020, 3, 1),
      endDate: new Date(2021, 8, 1),
    },
    position: "Software Engineer",
  },
  {
    id: "zebra",
    name: "Zebra Technologies",
    logo: zebraLogo,
    background: talenticaBackground,
    tenure: {
      startDate: new Date(2018, 7, 1),
      endDate: new Date(2020, 3, 1),
    },
    position: "Software Engineer",
  },
];
const WorkOverview = () => {
  return (
    <div id="work-overview">
      <Link href="/work" className="overview-link">
        <h1>Work Experience</h1>
      </Link>
      <div className="card-wrapper">
        {WORK_DATA.map((workElem) => {
          return (
            <div className="card" key={workElem.id}>
              <div className="card-header">
                <h2 className="company-name">{workElem.name}</h2>
                <div className="company-image-logo-wrapper">
                  <Image
                    className="company-image-logo"
                    src={workElem.logo}
                    alt={workElem.name + " logo"}
                  />
                </div>
              </div>
              <div className="card-content-wrapper">
                <div className="card-content">
                  <h1>{workElem.position}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkOverview;
