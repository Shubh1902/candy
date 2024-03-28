import "./index.css";
import Link from "next/link";
import Image from "next/image";
import { WORK_DATA, getFormattedDate } from "@/app/constants/constants";

const WorkOverview = () => {
  return (
    <div id="work-overview">
      <Link href="/work" className="overview-link">
        <h1>Work Experience</h1>
      </Link>
      <div className="card-wrapper">
        {WORK_DATA.map((workElem) => {
          return (
            <Link
              key={workElem.id}
              className="work-link"
              href={`/work/${workElem.id}`}
            >
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
                    <h1 className="tenure-date">
                      {getFormattedDate(workElem.tenure.startDate)}-
                      {getFormattedDate(workElem.tenure.endDate)}
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WorkOverview;
