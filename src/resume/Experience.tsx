import "./Experience.css"
import type {JSX} from "react";
import type {IExperience} from "./types.ts";

function Experience({experience}: {experience: IExperience}): JSX.Element {
    const responsibilities = experience.responsibilities.map((responsibility: string) => (
        <li>{responsibility}</li>
    ))
    return (
        <>
            <div>{experience.company}</div>
            <div>{experience.title}</div>
            <div>{experience.from} - {experience.to}</div>
            <div><ul>{responsibilities}</ul></div>
        </>
    )
}

export default Experience;
