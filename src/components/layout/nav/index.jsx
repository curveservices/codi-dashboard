import { faCalendar, faCalendarAlt, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "../../button";
import Socials from "../../socials";
import logo from "../../../assets/images/codi.png"
import './index.scss';

const Navbar = () => {
    return ( 
        <header className="header">
            <img src={logo} alt="codi" className="logo" />
            <form action="#" className="search">
                <label htmlFor="search-box"><FontAwesomeIcon icon={faMagnifyingGlass} /></label>
                    <input
                        list="search-hints"
                        type="search"
                        name="search-box"
                        id="search-box"
                        placeholder={` Search...`}
                        autoComplete="off" />
                <datalist id="search-hints"></datalist>
            </form>

            <div className="top-header">
                <Link to="https://calendly.com/morfbot"><FontAwesomeIcon className="calendar" icon={faCalendarAlt} /></Link>
                <Socials />
                <Button text="Log Out" />
            </div>
        </header>
     );
}
 
export default Navbar;