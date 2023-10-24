import React, { useContext, useEffect, useState } from 'react';

import styles from './Header.module.scss';

function Header() {

    const [activeRu, setActiveRu] = useState(true);
    const [activeEn, setActiveEn] = useState(false);

    useEffect(() => {


    }, [])




    function selectLanguageRu() {
        setActiveRu(true);
        setActiveEn(false);
    }

    function selectLanguageEn() {
        setActiveRu(false);
        setActiveEn(true);
    }




    return (
        <div className={styles.header}>
            <div className={styles.header__logo}></div>

            <div className={styles.header__btns}>
                <button className={`${styles.header__btn} ${activeRu ? styles.active : ''}`} onClick={selectLanguageRu}>Ru</button>
                <button className={`${styles.header__btn} ${activeEn ? styles.active : ''}`} onClick={selectLanguageEn}>En</button>
            </div>
        </div>
    );
}

export default Header;