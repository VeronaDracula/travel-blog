import { useState } from 'react';

import styles from './CounterTextarea.module.scss'

const CounterTextarea = (props) => {

    const {
        placeholder,
        maxCount,
        styleClass,
        changeHandler,
        textDefault,
        amountSymbolsDefault,
        errorStartus,
        dataTest = '',
        ...otherProps
    } = props;


    const [text, setText] = useState(textDefault || '');
    const [isAmountSymbols, setIsAmountSymbols] = useState(amountSymbolsDefault || 0);


    function countSymbols(e) {

        // setIsAmountSymbols(e.target.value.length);
        // setText(e.target.value);

        changeHandler(e.target.value, e.target.value.length, false);
    }


    return (
        <div className={`${styles.CounterTextarea} ${errorStartus ? styles.error : ""}`}>
            <textarea className={`${styles.CounterTextarea__textarea} ${styleClass}`}
                value={textDefault || ""}
                placeholder={placeholder}
                data-test={dataTest}
                onInput={(e) => { countSymbols(e) }}
                maxLength={maxCount}
                {...otherProps}
            ></textarea>

            <span className={styles.CounterTextarea__counter}>Символов: <span
                className={styles.CounterTextarea__counterNumber}>{amountSymbolsDefault}</span> из {props.maxCount}</span>
        </div>

    );
}

export default CounterTextarea;