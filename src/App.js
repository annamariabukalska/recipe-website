import './App.css';
import Footer from './components/Footer/Footer';
import CategoryCard from './components/CategoryCard/CategoryCard';

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

        <CategoryCard title="Grill"/>
        <CategoryCard title="Piknik"/>
        <CategoryCard title="Jul"/>
        <CategoryCard title="Påske"/>
      </div>
    <p>Siste oppskrifter</p>
  </div>
    <Footer />
    </main>
  );
}

export default App;
