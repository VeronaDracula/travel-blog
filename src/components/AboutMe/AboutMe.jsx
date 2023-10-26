import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import styles from './AboutMe.module.scss';



function AboutMe() {

    const text = useSelector((state) => state?.blog?.info?.text?.text || '');
    const img = useSelector((state) => state?.blog?.info?.img || '');

    useEffect(() => {


    }, [])








    return (
        <section className={styles.about}>
            <div className={styles.about__imgBox}>
                <img className={styles.about__img} src={img} alt=""></img>
            </div>
            <div className={styles.about__textBox}>
                <h2 className={styles.about__title}>Обо мне</h2>
                <p className={styles.about__text}>{text}</p>
            </div>
        </section>
    );
}

export default AboutMe;