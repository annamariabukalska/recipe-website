import './App.css';
import Footer from './components/Footer/Footer';
import CategoryCard from './components/CategoryCard/CategoryCard';
import RecipeCard from './components/RecipeCard/RecipeCard';

function App() {
  return (
    <main>      
      <img src={"images/kitchen.jpg"} alt="Kitchen" className="picture"/>

    <div className="content-inset">
      <div className="category-grid">
        <CategoryCard 
          title="17. mai" 
          imageUrl="icon-toast.png" 
        />

        <CategoryCard 
          title="Grill"
          imageUrl="icon-steak.png" 
        />

        <CategoryCard 
          title="Piknik"
          imageUrl="icon-strawberry.png" 
        />

        <CategoryCard 
          title="Jul"
          imageUrl="icon-gingerbread-house.png" 
        />

        <CategoryCard 
        title="Påske"
        imageUrl="icon-egg.png" 
        />
      </div>
    <h2>Ukens oppskrift</h2>
        <RecipeCard 
        title="Pavlova" 
        imageUrl="icon-egg.png"/>
      
  </div>
    <Footer />
    </main>
  );
}

export default App;
