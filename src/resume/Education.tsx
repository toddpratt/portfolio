import './Education.css';
import type {JSX} from "react";

export default function Education(): JSX.Element {
    return (
        <section className="education-section">
            <h2 className="section-title">Education</h2>
            <div className="education-card">
                <h3 className="institution">University of Massachusetts Lowell</h3>
                <p className="degree">Bachelor of Science, Information Technology</p>
                <p className="extra">Summa Cum Laude</p>
            </div>
        </section>
    )
}