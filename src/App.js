import kitchen from './resources/kitchen.jpg';
import { Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import CategoryCard from './components/CategoryCard/CategoryCard';

function App() {
  return (
    <main>
      <NavBar />
      <Link to={"/recipe"}>Trykk her</Link>

    <img src={kitchen} alt="Kitchen"/>

    <CategoryCard title="17.mai"/>
    <CategoryCard title="Grill"/>
    <CategoryCard title="Piknik"/>

{
  /*

      <CategoryCard title="17. mai" color="black"/>
      <CategoryCard title="Jul" image="...."/>
      <CategoryCard title="Grill"/>
*/
}


<p>Siste oppskrifter</p>

      <Footer />
    </main>
  );
}

export default App;
