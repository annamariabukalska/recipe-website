import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import recipeImage from '../resources/recipe-example.jpg';

function Recipe() {
  return (
    <main>
    <NavBar />
    <p>Oppskriftssiden</p>
    <img src={recipeImage} alt="Oppskrift"/>
    <Footer />
    </main>
  );
}

export default Recipe;
