import React from 'react';
import PropTypes from 'prop-types';
import {
  CurrencyIcon,
  Counter
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';


const BurgerIngredients = ({ ingredients, onIngredientClick, constructorIngredients }) => {
    const getCount = (item, constructorIngredients) => {
        if (!constructorIngredients) return 0;
      
        if (item.type === 'bun') {
          const bun = constructorIngredients.find(i => i.type === 'bun');
          return bun && bun._id === item._id ? 2 : 0;
        }
      
        return constructorIngredients.filter(i => i._id === item._id).length;
      };
  return (
    <section className={styles.section}>
      <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
      <nav className={styles.tabs}>
        <button className={styles.tab}>Булки</button>
        <button className={styles.tab}>Соусы</button>
        <button className={styles.tab}>Начинки</button>
      </nav>
      <h3 className="text text_type_main-medium">Булки</h3>
      <ul className={styles.list}>
      {ingredients.filter(i => i.type === 'bun').map(item => {
  const count = getCount(item, constructorIngredients);
  return (
    <li key={item._id} className={styles.item} onClick={() => onIngredientClick(item)}>
      <img src={item.image} alt={item.name} className={styles.image} />
      <div className={styles.priceRow}>
        <p className="text text_type_digits-default">{item.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{item.name}</p>
      {count > 0 && (
        <Counter count={count} size="default" extraClass={styles.counter} />
      )}
    </li>
  );
})}
      </ul>
      <h3 className="text text_type_main-medium">Соусы</h3>
      <ul className={styles.list}>
  {ingredients.filter(i => i.type === 'sauce').map(item => {
    const count = getCount(item, constructorIngredients);
    return (
      <li key={item._id} className={styles.item} onClick={() => onIngredientClick(item)}>
        <img src={item.image} alt={item.name} className={styles.image} />
        <div className={styles.priceRow}>
          <p className="text text_type_digits-default">{item.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{item.name}</p>
        {count > 0 && (
          <Counter count={count} size="default" extraClass={styles.counter} />
        )}
      </li>
    );
  })}
</ul>
      <h3 className="text text_type_main-medium">Начинки</h3>
      <ul className={styles.list}>
  {ingredients.filter(i => i.type === 'main').map(item => {
    const count = getCount(item, constructorIngredients);
    return (
      <li key={item._id} className={styles.item} onClick={() => onIngredientClick(item)}>
        <img src={item.image} alt={item.name} className={styles.image} />
        <div className={styles.priceRow}>
          <p className="text text_type_digits-default">{item.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{item.name}</p>
        {count > 0 && (
          <Counter count={count} size="default" extraClass={styles.counter} />
        )}
      </li>
    );
  })}
</ul>
    </section>
  );
}



BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      })
    ).isRequired,
    onIngredientClick: PropTypes.func.isRequired,
};

export default BurgerIngredients;
