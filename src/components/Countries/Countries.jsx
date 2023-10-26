import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Countries.module.scss';

import { getArrayBlogList } from '../../Redux/selectors/selector';

import CardMain from '../CardMain/CardMain';
import MainButton from '../MainButton/MainButton';



function Countries() {

    const articles = useSelector(getArrayBlogList).slice(0, 2);

    useEffect(() => {


    }, [])








    return (
        <section className={styles.countries}>

            <ul className={styles.countries__list}>
                {articles.map(item => (
                    <CardMain key={item.id}
                        id={item.id}
                        name={item.name}
                        text={item.text}
                        img={item.img} />
                ))}
                {/* <CardMain id={2} reverse={true} /> */}
            </ul>

            <Link className={styles.card__btn} to='/articles'>f</Link>

        </section>
    );
}

export default Countries;