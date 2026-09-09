import './App.css'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {experiences} from "./resume/types.ts";
import Resume from "./resume/Resume.tsx";

function App() {
    return (
        <div className="outer-container">
            <header className="outer-header">
                <div className="name">Todd Pratt</div>
                <nav>
                    <a target="_blank" href="https://github.com/toddpratt" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Github
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/todd-pratt-841522134/" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> LinkedIn
                    </a>
                </nav>
            </header>
            <div className="scroll-zone">
                <div className="viewport">
                    <Resume experiences={experiences} />
                </div>
            </div>
        </div>
    )
}

export default App
