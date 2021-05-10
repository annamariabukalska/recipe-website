import kitchen from './resources/kitchen.jpg';
import { Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
// import Card from './components/Card/Card';

function App() {
  return (
    <main>
      <NavBar />
      <Link to={"/recipe"}>Trykk her</Link>

    <img src={kitchen} alt="Kitchen"/>
{
  /*

      <Card title="17. mai" color="black"/>
      <Card title="Jul" image="...."/>
      <Card title="Grill"/>
*/
}


<p>Siste oppskrifter</p>

      <Footer />
    </main>
  );
}

export default App;
