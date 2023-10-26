import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import styles from './PersonalAbout.module.scss';

import { blogActions } from '../../../Redux/slice/slice';
import { updateInfo } from '../../../Redux/asyncThunks/updateInfo';

import CounterTextarea from '../../CounterTextarea/CounterTextarea';




function PersonalAbout() {

    const dispatch = useDispatch();

    const img = useSelector((state) => state?.blog?.info?.img || '');

    const description = useSelector((state) => state?.blog?.info?.text?.text || '');
    const symbolDescription = useSelector((state) => state?.blog?.info?.text?.symbols || 0);
    const errorStatusDescription = useSelector((state) => state?.blog?.info?.text?.errorStatus || false);

    useEffect(() => {


    }, [])



    const handlerDescription = (text, amount, status) => {
        dispatch(blogActions.editInfo({ value: { errorStatus: status, text: text, symbols: amount }, type: 'text' }));
    }


    const updateInfoClick = async () => {

        try {
            const response = await dispatch(updateInfo({ 'img': img, 'text': description }));

            if (response?.payload) {

            } else {

            }

        } catch (error) {
            console.log('error\n', error);
        }
    }






    return (
        <div className={styles.about}>
            <p>PersonalAbout</p>

            <CounterTextarea
                placeholder={'Введите текст'}
                maxCount={1000}
                // styleClass={styles.textareaStyles}
                changeHandler={handlerDescription}
                textDefault={description}
                amountSymbolsDefault={symbolDescription}
                errorStartus={errorStatusDescription} />

            <button onClick={updateInfoClick}>save</button>
        </div>
    );
}

export default PersonalAbout;