import "./Experience.css"
import type {JSX} from "react";
import type {IExperience} from "./types.ts";

function Experience({experience}: {experience: IExperience}): JSX.Element {
    const responsibilities = experience.responsibilities.map((responsibility: string) => (
        <li key={responsibility}>{responsibility}</li>
    ));
    const skills = experience.skills.map((skill: string) => (
        <span className="skill-pill" key={skill}>{skill}</span>
    ));
    return (
        <article className="experience-card">
            <div className="exp-header">
                <h3 className="company">{experience.company}</h3>
                <span className="dates">{experience.from} – {experience.to}</span>
            </div>
            <p className="title">{experience.title}</p>
            <ul className="responsibilities">
                {responsibilities}
            </ul>
            <div className="skills">
                <h4 className="skills-label">Skills</h4>
                <div className="skills-container">
                    {skills}
                </div>
            </div>
        </article>
    )
}

export default Experience;
