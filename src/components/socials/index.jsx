import { faFacebook, faInstagram, faLinkedin, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './index.scss'

const Socials = (props) => {
    return ( 
        <>
            <ul className="iconList">
                <li className="icons">
                    <Link to={props.fblink} target="_blank" rel="noreferer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                </li>
                <li className="icons">
                    <Link to={props.lilink} target="_blank" rel="noreferer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                </li>
                <li className="icons">
                    <Link to={props.xlink} target="_blank" rel="noreferer">
                        <FontAwesomeIcon icon={faSquareXTwitter} />
                    </Link>
                </li>
                <li className="icons">
                    <Link to={props.insta} target="_blank" rel="noreferer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </li>
            </ul> 
        </>
     );
}
 
export default Socials;