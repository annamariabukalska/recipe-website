import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
        <Link to="/">Oppskrifter</Link>
        <Link to="/">🏠</Link>
        <p>Om ideen</p>
    </nav>
  );
}

export default NavBar;
