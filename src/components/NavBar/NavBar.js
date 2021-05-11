import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
        <Link to="/" className="nav-link">Oppskrifter</Link>
        <Link to="/">
          <img src="images/icon-teapot.png" alt="Oppskrift" className="logo"/>
        </Link>
        <Link to="/about" className="nav-link">Om ideen</Link>
    </nav>
  );
}

export default NavBar;
