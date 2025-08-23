import "./Resume.css"
import type {JSX} from "react";
import type {IExperience} from "./types.ts";
import Experience from "./Experience.tsx";
import Education from "./Education.tsx";

function Resume({experiences}: {experiences: IExperience[]}): JSX.Element {
    return (
        <>
            <h1>Resume</h1>
            <div className="experiences-container">
                {experiences.map((experience: IExperience, index: number) => (
                    <div className="experience" key={index}>
                        <Experience experience={experience} />
                    </div>
                ))}
            </div>
            <Education />
        </>
    )
}

export default Resume;
