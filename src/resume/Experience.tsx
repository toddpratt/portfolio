import "./Experience.css"
import type {JSX} from "react";
import type {IExperience} from "./types.ts";

function Experience({experience}: {experience: IExperience}): JSX.Element {
    const responsibilities = experience.responsibilities.map((responsibility: string) => (
        <li key={responsibility}>{responsibility}</li>
    ));
    const skills = experience.skills.map((skill: string) => (
        <div key={skill}>{skill}</div>
    ));
    return (
        <>
            <div className="experience-container">
                <header>
                    <div className="company">{experience.company}</div>
                    <div className="from-to">{experience.from} - {experience.to}</div>
                </header>
                <div className="title">{experience.title}</div>
                <div className="responsibilities-container">
                    <ul>{responsibilities}</ul>
                </div>
            </div>
            <div className="skills-outer-container">
                <h3>Skills</h3>
                <div className="skills-container">
                    {skills}
                </div>
            </div>
        </>
    )
}

export default Experience;
