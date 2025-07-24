import React, { useEffect, useState } from 'react';
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import Modal from './components/modal/modal';
import IngredientDetails from './components/ingredient-details/ingredient-details';
import OrderDetails from './components/order-details/order-details';
import { API_URL } from './utils/api';
import styles from './app.module.css';

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/ingredients`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        return res.json();
      })
      .then(data => setIngredients(data.data))
      .catch(err => setError(err.message));
  }, []);


  const handleIngredientClick = (ingredient) => {
    setSelectedIngredient(ingredient);
    setModalType('ingredient');
  };

  const handleOrderClick = () => {
    setModalType('order');
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedIngredient(null);
  };

  useEffect(() => {
    if (ingredients.length > 0 && selectedIngredients.length === 0) {
      const bun = ingredients.find(i => i.type === 'bun');
      const mains = ingredients.filter(i => i.type === 'main').slice(0, 2);
  
      setSelectedIngredients([...(bun ? [bun] : []), ...mains]);
    }
  }, [ingredients, selectedIngredients.length]);
  

  return (
    <>
      <header>
        <AppHeader />
      </header>
      <main>
        {error ? (
          <p>Ошибка: {error}</p>
        ) : (
          <section className={styles.mainSection}>
              <BurgerIngredients
                ingredients={ingredients}
                onIngredientClick={handleIngredientClick}
                constructorIngredients={selectedIngredients}
              />
              <BurgerConstructor
                ingredients={ingredients}
                onOrderClick={handleOrderClick}
              />
          </section>
        )}
      </main>

      {/* Модальные окна */}
      {modalType === 'ingredient' && selectedIngredient && (
        <Modal onClose={closeModal} title="Детали ингредиента">
          <IngredientDetails ingredient={selectedIngredient} />
        </Modal>
      )}
      {modalType === 'order' && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};

export default App;
