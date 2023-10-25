import React, { useContext, useEffect, useState } from 'react';

import styles from './AboutMe.module.scss';



function AboutMe() {

    useEffect(() => {


    }, [])








    return (
        <section className={styles.about}>
            <div className={styles.about__img}></div>
            <div className={styles.about__textBox}>
                <h2 className={styles.about__title}>Обо мне</h2>
                <p className={styles.about__text}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt quas ullam, excepturi aspernatur
                    eos ad dolores quo quaerat iste quod commodi pariatur. Dolore, libero ipsum necessitatibus autem
                    inventore hic!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt quas ullam, excepturi aspernatur
                    eos ad dolores quo quaerat iste quod commodi pariatur. Dolore, libero ipsum necessitatibus autem
                    inventore hic!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt quas ullam, excepturi aspernatur
                    eos ad dolores quo quaerat iste quod commodi pariatur. Dolore, libero ipsum necessitatibus autem
                    inventore hic!
                </p>
            </div>
        </section>
    );
}

export default AboutMe;