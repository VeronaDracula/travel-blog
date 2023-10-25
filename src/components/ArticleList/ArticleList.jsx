import React, { useContext, useEffect, useState } from 'react';

import styles from './ArticleList.module.scss';

import Footer from '../Footer/Footer';


function ArticleList() {

    useEffect(() => {


    }, [])








    return (
        <section className={styles.articleList}>
            <div className={styles.articleList__content}>
                <p>ArticleList</p>
            </div>

            <Footer />
        </section>
    );
}

export default ArticleList;