import "./Resume.css"
import type {JSX} from "react";
import type {IExperience} from "./types.ts";
import Experience from "./Experience.tsx";
import Education from "./Education.tsx";

function Resume({experiences}: {experiences: IExperience[]}): JSX.Element {
    return (
        <>
            <Education />
            <section className="experience-section">
                <h2 className="section-title">Experience</h2>
                <ol className="timeline">
                    {experiences.map((experience: IExperience, index: number) => (
                        <li className="timeline-item" key={index}>
                            <Experience experience={experience} />
                        </li>
                    ))}
                </ol>
            </section>
        </>
    )
}

export default Resume;
