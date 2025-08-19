import './App.css'
import Resume from './resume/Resume.tsx'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {experiences} from "./resume/types.ts";

function App() {
    return (
        <>
            <div className="outer-container">
                <div className="outer-header">
                    <div className="name">Todd Pratt</div>
                    <div className="link">
                        <a target="_blank" href="https://github.com/toddpratt" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Github
                        </a>
                    </div>
                    <div className="link">
                        <a target="_blank" href="https://www.linkedin.com/in/todd-pratt-841522134/" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> LinkedIn
                        </a>
                    </div>
                </div>
                <div className="outer-viewport">
                    <Resume experiences={experiences} />
                </div>
            </div>
        </>
    )
}

export default App
