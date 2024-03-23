import nurtureLogo from "@/public/assets/images/nurture.png";
import talenticaLogo from "@/public/assets/images/talentica.svg";
import zebraLogo from "@/public/assets/images/zebra.png";
import { StaticImageData } from "next/image";
export const MONTH_NUMBER_TO_NAME = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
interface WorkInterface {
  id: string;
  name: string;
  logo: StaticImageData;
  tenure: {
    startDate: Date;
    endDate: Date;
  };
  position: string;
  description: string[];
  skills: string[];
}
export const WORK_DATA: Array<WorkInterface> = [
  {
    id: "nurture",
    name: "nurture.farm",
    logo: nurtureLogo,
    tenure: {
      startDate: new Date(2021, 8),
      endDate: new Date(2024, 1),
    },
    position: "Technical Lead",
    description: [
      `Collaborated with product managers and UI/UX designers to define project requirements and
    plan work for front end teams across 3 verticals`,
      `Developed google maps based telematics platform to visualize organization's on ground resources in transit during service at farms`,
      `Supervised and mentored engineers across 3 verticals and conducted sessions covering topics in React and Javascript ecosystem`,
    ],
    skills: [
      `Typescript`,
      `Javascript`,
      `React`,
      `Material UI`,
      `React Testing Library`,
      `Real User Monitoring`,
    ],
  },
  {
    id: "nurture2",
    name: "nurture.farm",
    logo: nurtureLogo,
    tenure: {
      startDate: new Date(2021, 8),
      endDate: new Date(2024, 1),
    },
    position: "Senior Software Engineer",
    skills: [
      `Typescript`,
      `Javascript`,
      `React`,
      `Material UI`,
      `React Testing Library`,
      `Real User Monitoring`,
      `TDD`,
    ],
    description: [
      `Led Front End architecture discussions and introduced most impactful features like
      SSO(Single sign on using Okta OAuth2) and Real User Monitoring`,
      `Integrated Google Maps with React to support AWD Program which enables user to visualize and change satellite farms(polygons, points and lines) on map`,
      `Implemented React-Admin framework to build admin portals at faster pace`,
      `Introduced Unit and Integration Testing using Jest and React Testing Library in all web applications`,
      `Most impactful role in building entire Frontend team during tenure`,
    ],
  },
  {
    id: "talentica",
    name: "Talentica Software",
    logo: talenticaLogo,
    tenure: {
      startDate: new Date(2020, 3, 1),
      endDate: new Date(2021, 8, 1),
    },
    position: "Software Engineer",
    description: [
      `Bootstrapped UI of Myra Wealth, a US based fintech startup and launched MVP in 6 months`,
      `Collaborated and brainstormed with CEO of Myra-wealth and UI/UX team every week to plan and optimize user journeys based on RUM(Real user monitoring data)`,
      `Built in-app integration with Plaid UI, Pointserv, Calendly, Docusign, Stripe`,
      `Built generic reusable Form Component using formik and yup which is used to render more than 100 forms`,
      `Designed and built Dashboard to render UI based on server provided JSON which was accepted as hard problem in Talentica`,
    ],
    skills: [
      `Typescript`,
      `Javascript`,
      `React`,
      `Material UI`,
      `React Testing Library`,
      `Real User Monitoring`,
    ],
  },
  {
    id: "zebra",
    name: "Zebra Technologies",
    logo: zebraLogo,
    tenure: {
      startDate: new Date(2018, 7, 1),
      endDate: new Date(2020, 3, 1),
    },
    position: "Software Engineer",
    description: [
      `Developed graphical representation of daily, weekly and monthly sales forecast using D3.js for McDonald's UK`,
      `Developed both UI and server for employee leave application system for McDonald's UK`,
    ],
    skills: [`Javascript`, `Angular JS`, `Java`, `Spring`, `SQL`, `D3.js`],
  },
];

export const getFormattedDate = (date: Date) => {
  return `${MONTH_NUMBER_TO_NAME[date.getMonth() - 1]} ${date
    .getFullYear()
    .toString()
    .padStart(4, "0")}`;
};
