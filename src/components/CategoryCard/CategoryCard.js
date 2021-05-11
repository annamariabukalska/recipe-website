import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './CategoryCard.css';

function CategoryCard(props) {
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/category'), [history]);
  
    return (
      <div className="category-card" onClick={handleOnClick}>
          <h2 className="category-title">{props.title}</h2>
          <img src={`images/${props.imageUrl}`} alt={props.title}/>
      </div>
    );
  }

  export default CategoryCard;
  