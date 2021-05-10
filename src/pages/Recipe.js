import Footer from '../components/Footer/Footer';
import recipeImage from '../resources/recipe-example.jpg';

function Recipe() {
  return (
    <main>
    <p>Oppskriftssiden</p>
    <img src={recipeImage} alt="Oppskrift"/>
    <Footer />
    </main>
  );
}

export default Recipe;
