import "./Repo.css"
import type {JSX} from "react"
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Repo({name, commits}: {name: string, commits: any[]}): JSX.Element {
    return (
        <div className="push-event">
            <div className="repo">
                <a href={`https://github.com/${name}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> {name}</a>
            </div>
            {commits.slice(0, 3).map((commit: any, index: number) => (
                <ul className="commit-container" key={index}>
                    <li>{commit.message}</li>
                </ul>
            ))}
        </div>
    )
};
