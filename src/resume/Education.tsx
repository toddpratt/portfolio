import './Education.css';
import type {JSX} from "react";

export default function Education(): JSX.Element {
    return (
        <div className="education-container">
            <h1>Education</h1>
            <h2 className="institution">University of Massachusetts Lowell</h2>
            <h3 className="degree">Bachelor's of Science, Information Technology</h3>
            <h4 className="extra">Summa Cum Laude</h4>
        </div>
    )
}