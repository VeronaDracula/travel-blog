import React, { useContext, useEffect, useState } from 'react';

import styles from './Promo.module.scss';

import Header from '../Header/Header';
import MainButton from '../MainButton/MainButton';


function Promo() {

    useEffect(() => {


    }, [])








    return (
        <section className={styles.promo}>
            <div className={styles.promo__cover}></div>
            <Header />

            <div className={styles.promo__container}>
                <h1 className={styles.promo__title}>Мои путешествия</h1>
                <p className={styles.promo__text}>Приглашаю вас вместе со мной отправиться изучать нашу планету</p>
                <MainButton text='Начать путешествие' />
            </div>
        </section>
    );
}

export default Promo;