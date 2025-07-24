import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CurrencyIcon,
  DragIcon,
  DeleteIcon,
  LockIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';

const BurgerConstructor = ({ ingredients = [], onOrderClick }) => {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
  {/* Верхняя булка */}
  {ingredients.find(i => i.type === 'bun') && (
    <li key="top-bun" className={styles.item}>
      <img src={ingredients.find(i => i.type === 'bun').image} alt="top bun" className={styles.image} />
      <p className="text text_type_main-default">{ingredients.find(i => i.type === 'bun').name} (верх)</p>
      <div className={styles.price}>
        <p className="text text_type_digits-default">{ingredients.find(i => i.type === 'bun').price}</p>
        <CurrencyIcon type="primary" />
        <LockIcon type="secondary" className={styles.lockIcon} />
      </div>
    </li>
  )}

  {/* Начинка */}
  {ingredients
    .filter(i => i.type !== 'bun')
    .slice(0, 5)
    .map(item => (
      <li key={item._id} className={styles.item}>
        <DragIcon type="primary" className={styles.dragIcon} />
        <img src={item.image} alt={item.name} className={styles.image} />
        <p className="text text_type_main-default">{item.name}</p>
        <div className={styles.price}>
          <p className="text text_type_digits-default">{item.price}</p>
          <CurrencyIcon type="primary" />
          <DeleteIcon type="primary" className={styles.deleteIcon} />
        </div>
      </li>
    ))}

  {/* Нижняя булка */}
  {ingredients.find(i => i.type === 'bun') && (
    <li key="bottom-bun" className={styles.item}>
      <img src={ingredients.find(i => i.type === 'bun').image} alt="bottom bun" className={styles.image} />
      <p className="text text_type_main-default">{ingredients.find(i => i.type === 'bun').name} (низ)</p>
      <div className={styles.price}>
        <p className="text text_type_digits-default">{ingredients.find(i => i.type === 'bun').price}</p>
        <CurrencyIcon type="primary" />
        <LockIcon type="secondary" className={styles.lockIcon} />
      </div>
    </li>
  )}
</ul>

      <div className={styles.button}>
      <p className="text text_type_digits-default">610</p>
        <CurrencyIcon type="primary" />
        <Button type="primary" size="large" onClick={onOrderClick}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      })
    ).isRequired,
    onOrderClick: PropTypes.func.isRequired,
};

export default BurgerConstructor;