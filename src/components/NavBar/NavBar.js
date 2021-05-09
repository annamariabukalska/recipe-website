import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
        <p>Tema 16</p>
        <Link to="/">🏠</Link>
    </nav>
  );
}

export default NavBar;
