import React from 'react';
import styles from "./CardList.module.css";
import Card from "./Card/Card";

const CardList = () => {
    return (
        <ul className={styles.cardList}>
          <Card/>
        </ul>
    );
};

export default CardList;
