import React from "react";
import "./index.css";
import Link from "next/link";
const WORK_DATA = [
  {
    id: "nurture",
    name: "nurture.farm",
    tenure: {
      startDate: new Date(2021, 8, 1),
      endDate: new Date(2024, 1, 1),
    },
    position: "SDE3 Frontend",
  },
  {
    id: "talentica",
    name: "Talentica Software",
    tenure: {
      startDate: new Date(2020, 3, 1),
      endDate: new Date(2021, 8, 1),
    },
    position: "Software Engineer",
  },
  {
    id: "reflexis",
    name: "Reflexis Systems",
    tenure: {
      startDate: new Date(2018, 7, 1),
      endDate: new Date(2020, 3, 1),
    },
    position: "Software Engineer",
  },
];
const WorkOverview = () => {
  return (
    <>
      <Link href="/work" className="overview-link">
        <h1>Work Experience</h1>
      </Link>
      <div className="card-wrapper">
        {WORK_DATA.map((workElem) => {
          return (
            <div className="card" key={workElem.id}>
              <div className="card-header">
                <h2>{workElem.name}</h2>
              </div>
              <div className="card-content">
                <h2>{workElem.position}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WorkOverview;
