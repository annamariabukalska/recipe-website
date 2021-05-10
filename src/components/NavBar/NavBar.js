import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
        <Link to="/recipe">Oppskrifter</Link>
        <Link to="/">🏠</Link>
        <Link to="/">Om ideen</Link>
    </nav>
  );
}

export default NavBar;
