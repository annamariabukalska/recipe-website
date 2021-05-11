import Footer from '../components/Footer/Footer';
import './RecipePage.css';

function RecipePage() {
  return (
    <main>
    <img src="images/recipe-example.jpg" alt="Oppskrift" className="recipe-large-image"/>
    <div className="content-inset">
      <h1>Pavlova</h1>
      <h2>⏰ 3 timer</h2>

<p>Hentet fra Godt.no</p>
<p>Forvarm ovnen til 180 grader. Bruk en kjøkkenmaskin og pisk eggehvitene med litt av sukkeret til myk skummende marengs ved middels hastighet. Bland maisenna sammen med resten av sukkeret og tilsett sukkeret i marengsen litt etter litt, øk hastigheten når alt sukkeret er tilsatt og pisk til tykk, blank og stiv marengs. Tilsett eddik og visp 10 sekunder til.</p>
    </div>
    <Footer />
    </main>
  );
}

export default RecipePage;
