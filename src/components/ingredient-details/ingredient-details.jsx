import React from 'react';
import PropTypes from 'prop-types';
import styles from './ingredient-details.module.css';

const IngredientDetails = ({ ingredient }) => {
  if (!ingredient) return null;

  return (
    <div className={styles.wrapper}>
      <img src={ingredient.image_large} alt={ingredient.name} className={styles.image} />
      <h3 className="text text_type_main-medium">{ingredient.name}</h3>
      <ul className={styles.nutrition}>
        <li>
          <span>Калории, ккал</span>
          <span>{ingredient.calories}</span>
        </li>
        <li>
          <span>Белки, г</span>
          <span>{ingredient.proteins}</span>
        </li>
        <li>
          <span>Жиры, г</span>
          <span>{ingredient.fat}</span>
        </li>
        <li>
          <span>Углеводы, г</span>
          <span>{ingredient.carbohydrates}</span>
        </li>
      </ul>
    </div>
  );
}

IngredientDetails.propTypes = {
  ingredient: PropTypes.shape({
    image_large: PropTypes.string,
    name: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number
  }).isRequired
};

export default IngredientDetails;