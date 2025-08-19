import './App.css'
import Tile from './Tile.tsx'
import Resume from './resume/Resume.tsx'
import { faLinkedin, faGithub, faDocker } from '@fortawesome/free-brands-svg-icons';

function App() {
    return (
        <>
            <div className="container">
                <div className="title">
                    <div>
                        Todd A. Pratt
                    </div>
                    <div>
                        Portfolio
                    </div>
                </div>
                <div className="tile-container">
                    <Tile title="LinkedIn"
                          url="https://www.linkedin.com/in/todd-pratt-841522134"
                          icon={faLinkedin}></Tile>
                    <Tile title="Github"
                          url="https://github.com/toddpratt"
                          icon={faGithub}></Tile>
                    <Tile title="Docker Hub"
                          url="https://hub.docker.com/u/toddpratt/"
                          icon={faDocker}></Tile>
                </div>
                <Resume></Resume>
            </div>
        </>
    )
}

export default App
