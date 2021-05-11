import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
        <Link to="/recipe" className="nav-link">Oppskrifter</Link>
        <Link to="/">
          <img src="images/icon-teapot.png" alt="Oppskrift"/>
        </Link>
        <Link to="/" className="nav-link">Om ideen</Link>
    </nav>
  );
}

export default NavBar;
