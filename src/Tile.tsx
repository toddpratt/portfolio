import './Tile.css'
import type {JSX} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

function Tile({title, url, icon}: {title: string, url: string, icon: IconProp}): JSX.Element {
    return (
        <>
            <div className="tile">
                <a target="_blank" href={url}>
                    <FontAwesomeIcon icon={icon} /> {title}
                </a>
            </div>
        </>
    );
}

export default Tile;
