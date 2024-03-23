import { WORK_DATA, getFormattedDate } from "@/app/constants/constants";
import React from "react";
import BackIcon from "@/public/assets/icons/arrow-back.svg";
import "./index.css";
import Image from "next/image";
import Link from "next/link";
const WorkDetails = ({ params }: { params: { id: string } }) => {
  const workDetails = WORK_DATA.find((w) => w.id === params.id[0]);
  if (!workDetails) return <div>No details Available</div>;
  return (
    <div className="work-details-wrapper">
      <div className="work-details-header">
        <Link href="/work">
          <Image className="back-icon" src={BackIcon} alt="back-icon" />
        </Link>
        <div>
          <h2>Work Details</h2>
        </div>
      </div>
      <div>{workDetails.name}</div>
      <div>{workDetails.position}</div>
      <div>
        <h4>
          {getFormattedDate(workDetails.tenure.startDate)}-
          {getFormattedDate(workDetails.tenure.endDate)}
        </h4>
      </div>
      <div>
        <ul>
          {workDetails.description.map((item) => {
            return (
              <li>
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <div>
          <h4>Primary skills in this role</h4>
        </div>
        <ul>
          {workDetails.skills.map((item) => {
            return (
              <li>
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WorkDetails;
