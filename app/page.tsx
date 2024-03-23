import { useCallback, useState } from "react";
import "./page.css";
import WorkOverview from "./work/workOverview";

export default function Home() {
  return (
    <div>
      <div className="intro-container">
        <div className="hero-name">
          <h1>Shubhanshu</h1>
        </div>
        <div className="scroll-container">
          <div className="intro">
            <h1>Human.</h1>
            <h1>Developer.</h1>
            <h1>Sportsperson.</h1>
            <h1>Architect.</h1>
          </div>
        </div>
      </div>
      <section className="work-overview-wrapper">
        <WorkOverview />
      </section>
    </div>
  );
}
