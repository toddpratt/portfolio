import "./Resume.css"
import type {JSX} from "react";
import type {IExperience} from "./types.ts";
import Experience from "./Experience.tsx";

const experiences: IExperience[] = [
    {
        company: "Cigent Technology, Inc.",
        title: "Software Engineer, DevOps Engineer",
        from: "November 2019",
        to: "Present",
        responsibilities: [
            "Develop new features and bug fixes for two web-based customer portals.",
            "Introduced Ansible configurations for server provisioning and deployments.",
            "Implemented blue-green deployment strategy.",
        ]
    },
    {
        company: "Zoomi, Inc.",
        title: "Software Engineer",
        from: "August 2017",
        to: "November 2019",
        responsibilities: [
            "Built components to parse, transform, and analyze customer-provided data.",
            "Developed API features to improve data quality.",
            "Contributed to single-page frontend application.",
            "Assisted peers with Docker, Nginx, shell scripting, AWS, and Ansible.",
        ]
    },
    {
        company: "Mirror Image Internet, Inc.",
        title: "Software Engineer",
        from: "February 2017",
        to: "June 2017",
        responsibilities: [
            "Develop features, fix bugs for an AngularJS 1.x customer portal.",
            "Maintained node.js backend API consuming multiple data sources.",
            "Wrote unit tests and improved overall code quality."
        ]
    },
    {
        company: "Google, Inc.",
        title: "Software Engineer, Tools and Infrastructure",
        from: "April 2014",
        to: "January 2017",
        responsibilities: [
            "Built tools to speed development, improve test coverage, and increase developer velocity.",
            "Developed large integration and Selenium tests.",
        ]
    },
    {
        company: "ITA Software by Google, Inc.",
        title: "Software Engineer / Site Reliability Engineer",
        from: "April 2011",
        to: "April 2014",
        responsibilities: [
            "Developed highly available deployment, data processing, and monitoring tools.",
            "Managed large-scale clustered deployments.",
            "Enhanced existing internal tooling.",
        ]
    },
    {
        company: "ITA Software by Google, Inc.",
        title: "Software Engineer / Site Reliability Engineer",
        from: "June 2008",
        to: "April 2011",
        responsibilities: [
            "Designed and developed large web-based applications.",
            "Built monitoring and automation tools.",
            "Implement Selenium tests.",
        ]
    }
];

function Resume(): JSX.Element {
    const exps = experiences.map(experience => (
            <Experience experience={experience} />
    ))
    return (
        <>
            <div className="resume">
                {exps}
            </div>
        </>
    )
}

export default Resume;
