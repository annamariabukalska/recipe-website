// import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <main>
      <NavBar />
      <p>Hello Word</p>
      <Link to={"/recipe"}>Trykk her</Link>
      <Footer />
    </main>
  );
}

export default App;
