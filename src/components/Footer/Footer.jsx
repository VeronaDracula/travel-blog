import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';



function Footer() {

    useEffect(() => {


    }, [])








    return (
        <section className={styles.footer}>

            <Link to="/signin">Мое логово</Link>
            <Link to="/personal">Мое логово</Link>


        </section>
    );
}

export default Footer;