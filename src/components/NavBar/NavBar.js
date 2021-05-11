import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
        <Link to="/recipe">Oppskrifter</Link>
        <Link to="/">
        <img src="images/icon-teapot.png" alt="Oppskrift"/>
        </Link>
        <Link to="/">Om ideen</Link>
    </nav>
  );
}

export default NavBar;
