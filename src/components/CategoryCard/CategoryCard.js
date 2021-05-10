import './CategoryCard.css';

function CategoryCard(props) {
    return (
      <div className="bottom-category">
          <h2>{props.title}</h2>
      </div>
    );
  }


  export default CategoryCard;
  