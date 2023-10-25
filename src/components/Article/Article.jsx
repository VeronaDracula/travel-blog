import React, { useContext, useEffect, useState } from 'react';

import styles from './Article.module.scss';

import Footer from '../Footer/Footer';



function Article() {

    useEffect(() => {


    }, [])








    return (
        <section className={styles.article}>
            <div className={styles.article__content}>
                <p>Article</p>
            </div>

            <Footer />
        </section>
    );
}

export default Article;