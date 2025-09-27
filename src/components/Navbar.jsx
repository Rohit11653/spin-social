import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import menu from '../assets/images/menu.png';
import '../assets/style.css';

function Navbar() {
    const navigate = useNavigate()
    return (
        <header className="kcdvhd23jn-header hgtlyzcx-r">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Logo" width="120" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <img src={menu} alt="menu" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" href="#">FAQs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Terms of Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/privacy-policy" className="nav-link" href="#">Privacy Policy</Link>
                            </li>
                        </ul>
                        <div className="d-flex gap-3">
                            <button
                                onClick={() => navigate('/sign-up')}
                                className="SwYt2E-jbtn" type="submit">Sign Up</button>
                            <button
                                onClick={() => navigate('/login')}
                                className="SwYt2E-jbtn-1" type="submit">Log In</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
