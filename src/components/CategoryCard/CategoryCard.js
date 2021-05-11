import './CategoryCard.css';

function CategoryCard(props) {
    return (
      <div className="category-card" onClick={openRecipe}>
          <h2>{props.title}</h2>
          <img src={`images/${props.imageUrl}`} alt={props.title}/>
      </div>
    );
  }

  function openRecipe() {
    alert("Not availalbe");
  }

  export default CategoryCard;
  