// import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
    <NavBar />
    <p>Hello Word</p>
    <Link to={"/recipe"}>Trykk her</Link>
    <Footer />
    </div>
  );
}

export default App;
