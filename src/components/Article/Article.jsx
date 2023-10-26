import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import styles from './Article.module.scss';

import { getCountry } from '../../Redux/asyncThunks/getCountry';

import Footer from '../Footer/Footer';



function Article() {

    const dispatch = useDispatch();
    const { id } = useParams();

    const name = useSelector((state) => state?.blog?.country?.name || '');
    const text = useSelector((state) => state?.blog?.country?.text || '');
    const img = useSelector((state) => state?.blog?.country?.img || '');

    const fetchCountry = async () => {
        try {
            await dispatch(getCountry(id));

        } catch (error) {
            console.log('error\n', error);
        }
    };

    useEffect(() => {
        // fetchCountry()

    }, [])







    return (
        <section className={styles.article}>
            <div className={styles.article__content}>
                <p>Article</p>
                <p>{name}</p>
                <p>{text}</p>
                <div className={styles.article__imgBox}>
                    <img className={styles.article__img} src={img} alt={name}></img>
                </div>
            </div>

            <Footer />
        </section>
    );
}

export default Article;