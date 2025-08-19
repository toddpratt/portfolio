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
