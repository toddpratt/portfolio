import "./Experience.css"
import type {JSX} from "react";
import type {IExperience} from "./types.ts";

function Experience({experience}: {experience: IExperience}): JSX.Element {
    const responsibilities = experience.responsibilities.map((responsibility: string) => (
        <li>{responsibility}</li>
    ))
    return (
        <div className="container">
            <header>
                <div className="company">{experience.company}</div>
                <div className="from-to">{experience.from} - {experience.to}</div>
            </header>
            <div className="title">{experience.title}</div>
            <div className="responsibilities-container"><ul>{responsibilities}</ul></div>
        </div>
    )
}

export default Experience;
