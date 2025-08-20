import "./Resume.css"
import type {JSX} from "react";
import type {IExperience} from "./types.ts";
import {useState} from "react";
import Experience from "./Experience.tsx";

function Resume({experiences}: {experiences: IExperience[]}): JSX.Element {
    const [stateExperience, setExperience] = useState(experiences[0]);
    const doClick = (exp: IExperience) => {
        return (event: React.MouseEvent) => {
            event.preventDefault();
            setExperience(exp);
        }
    }
    const elements = experiences.map((exp: IExperience) => (
        <h3 key={exp.company} onClick={doClick(exp)}>{exp.company}</h3>
    ));
    const experience = (
        <Experience experience={stateExperience} />
    );
    return (
        <>
            <div className="container">
                <h2 className="header">
                    Resume
                </h2>
                <div className="inner-container">
                    <div className="inner-nav">
                        <div>
                            {elements}
                        </div>
                        <div className="education">
                            <h4>Education</h4>
                            <div className="degree">B.S. Information Technology</div>
                            <div className="school">University of Massachusetts Lowell</div>
                        </div>
                    </div>
                    <div className="viewport-container">
                        <div className="viewport">
                            {experience}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;
