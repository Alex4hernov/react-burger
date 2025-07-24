import React from 'react';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

const AppHeader = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><BurgerIcon type="primary" />
            <span className="text text_type_main-small">Конструктор</span>
        </li>
        <li className={styles.navItem}><ListIcon type="secondary" />
            <span className="text text_type_main-small">Лента заказов</span>
        </li>
      </ul>
      <Logo />
      <ul className={styles.navList}>
        <li className={styles.navItem}><ProfileIcon type="secondary" />
            <span className="text text_type_main-small">Личный кабинет</span>
        </li>
      </ul>
    </nav>
  );
}

export default AppHeader;