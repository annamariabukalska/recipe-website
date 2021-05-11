import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import './RecipeCard.css';

function RecipeCard(props) {
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/recipe'), [history]);
    return (
      <div className="recipe-card" onClick={handleOnClick}>
          <div className="text-container">
            <h2 className="recipe-title">{props.title}</h2>
            <p className="recipe-subtitle">⏰ 3 timer</p>
          </div>
          <img src={`images/${props.imageUrl}`} alt={props.title}/>
      </div>
    );
}
  
export default RecipeCard;  