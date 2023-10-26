import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './ArticleList.module.scss';

import { getArrayBlogList } from '../../Redux/selectors/selector';

import CardMain from '../CardMain/CardMain';
import Footer from '../Footer/Footer';


function ArticleList() {

    const articles = useSelector(getArrayBlogList);

    useEffect(() => {


    }, [])








    return (
        <section className={styles.articleList}>
            <div className={styles.articleList__content}>
                <p>ArticleList</p>
                {articles.map(item => (
                    <CardMain key={item.id}
                        id={item.id}
                        name={item.name}
                        text={item.text}
                        img={item.img} />
                ))}
            </div>

            <Footer />
        </section>
    );
}

export default ArticleList;