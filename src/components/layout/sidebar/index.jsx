import {
    faChartBar,
    faCog,
    faFile,
    faHome,
    faListAlt,
    faMessage,
    faQuestionCircle,
    faUserAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./index.scss";

const Sidebar = () => {
    return ( 
        <>
            <div className="sidebar">
                <div className="side-title">
                    <Link to="/" className="dash-image" alt="Dashboard icon"><FontAwesomeIcon icon={faChartBar}/> Dashboard</Link>
                </div>
                <div className="mainlist">
                    <ul className="side-list">
                        <Link to="/"><li><FontAwesomeIcon icon={faHome}/> Home</li></Link>
                        <Link to="/"><li><FontAwesomeIcon icon={faUserAlt} /> Clients</li></Link>
                        <Link to="/"><li><FontAwesomeIcon icon={faFile} /> Forms</li></Link>
                        <Link to="/"><li><FontAwesomeIcon icon={faMessage} /> Messages</li></Link>
                        <Link to="/"><li><FontAwesomeIcon icon={faListAlt}/> Task</li></Link>
                    </ul>
                </div>
                <div className="settings-list">
                    <ul className="side-settings">
                        <Link to="/"><li><FontAwesomeIcon icon={faCog} /> Settings</li></Link>
                        <Link to="/"><li><FontAwesomeIcon icon={faQuestionCircle} />Support</li></Link>
                    </ul>
                </div>
            </div> 
        </>
     );
}
 
export default Sidebar;