import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";


import styles from './PersonalCountries.module.scss';

import { blogActions } from '../../../Redux/slice/slice';
import { createArticle } from '../../../Redux/asyncThunks/createArticle';
import { updateArticle } from '../../../Redux/asyncThunks/updateArticle';

import CounterTextarea from '../../CounterTextarea/CounterTextarea';


function PersonalCountries() {

    const dispatch = useDispatch();

    useEffect(() => {


    }, [])


    // const img = useSelector((state) => state?.blog?.info?.img || ''); 

    // const description = useSelector((state) => state?.blog?.info?.text?.text || '');
    // const symbolDescription = useSelector((state) => state?.blog?.info?.text?.symbols || 0);
    // const errorStatusDescription = useSelector((state) => state?.blog?.info?.text?.errorStatus || false);



    // const handlerDescription = (text, amount, status) => {
    //     dispatch(blogActions.editInfo({ value: { errorStatus: status, text: text, symbols: amount }, type: 'text' }));
    // }


    const createArticleClick = async () => {

        const idElement = Date.now(); // id
        const newCountry = {
            "id": idElement,
            "name": "Куба",
            "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, totam. Tempora animi, ratione pariatur nulla quas aliquam iure temporibus fugiat voluptates illum? In impedit culpa nihil veritatis minima esse eveniet!",
            "img": "https://images.unsplash.com/photo-1570299437488-d430e1e677c7?auto=format&fit=crop&q=80&w=1925&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }

        try {
            const response = await dispatch(createArticle(newCountry));

            if (response?.payload) {

            } else {

            }

        } catch (error) {
            console.log('error\n', error);
        }
    }


    const updateArticleClick = async () => {
        const newCountry = {
            "id": 1,
            "name": "Австралия",
            "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, totam. Tempora animi, ratione pariatur nulla quas aliquam iure temporibus fugiat voluptates illum? In impedit culpa nihil veritatis minima esse eveniet!",
            "img": "https://images.unsplash.com/photo-1570299437488-d430e1e677c7?auto=format&fit=crop&q=80&w=1925&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }

        try {
            const response = await dispatch(updateArticle(newCountry));

            if (response?.payload) {

            } else {

            }

        } catch (error) {
            console.log('error\n', error);
        }
    }





    return (
        <div className={styles.countries}>
            <p>PersonalCountries</p>

            {/* <CounterTextarea
                placeholder={'Введите текст'}
                maxCount={1000}
                // styleClass={styles.textareaStyles}
                changeHandler={handlerDescription}
                textDefault={description}
                amountSymbolsDefault={symbolDescription}
                errorStartus={errorStatusDescription} /> */}

            <button onClick={createArticleClick}>save</button>
            <button onClick={updateArticleClick}>update</button>
        </div>
    );
}

export default PersonalCountries;