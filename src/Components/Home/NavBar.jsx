import { Link } from 'react-router-dom';
import MainSection from './MainSection';

function Navbar() {
    return (
        <nav className="navbar">
            <div> <p className="navbar-name">⬛️ Amar Sinha</p> 
            </div>
                <div className="navbar--items">
                    <ul>
                        <li>
                            <Link 
                            to="/MainSection"
                            className="navbar--content"
                            >Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to="/MyPortfolio"
                            className="navbar--content"
                            >Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link 
                            to="/AboutMe"
                            className="navbar--content"
                            >About Me
                            </Link>
            
                        </li>
                    </ul>
                </div>
                <Link
                to="/ContactMe"
                className="button-ContactMe"
                > <button className="button-primary">Contact Me</button>
                </Link>
        </nav>
    );
}

export default Navbar;