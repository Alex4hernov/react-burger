import React from 'react';
import styles from './order-details.module.css';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderDetails = () => {
  return (
    <div className={styles.wrapper}>
      <p className="text text_type_main-large">034536</p>
      <p className="text text_type_main-default">идентификатор заказа</p>
      <CheckMarkIcon type="primary" />
      <p className="text text_type_main-medium">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default">Дождитесь готовности на орбитальной станции</p>
    </div>
  );
}

export default OrderDetails;