import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './CardMain.module.scss';



function CardMain(props) {

    const {
        id,
        text,
        name,
        img,
        reverse = false

    } = props;

    const path = `/article/${id}`


    useEffect(() => {


    }, [])








    return (
        <li className={`${styles.card} ${reverse ? styles.reverse : ''}`}>
            <div className={styles.card__imgBox}>
                <img className={styles.card__img} src={img} alt=''></img>
            </div>
            <div className={styles.card__textBox}>
                <h2 className={styles.card__title}>{name}</h2>
                <p className={styles.card__text}>{text}</p>

                <Link className={styles.card__btn} to={path}>f</Link>
            </div>
        </li>
    );
}

export default CardMain;