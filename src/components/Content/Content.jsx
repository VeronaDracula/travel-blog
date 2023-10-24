import React, { useContext, useEffect, useState } from 'react';

import styles from './Content.module.scss';

import Promo from '../Promo/Promo';
import AboutMe from '../AboutMe/AboutMe';
import Countries from '../Countries/Countries';
// import Statistic from '../Statistic/Statistic';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';


function Content() {

    useEffect(() => {


    }, [])








    return (
        <div className={styles.content}>
            <Promo />
            <AboutMe />
            <Countries />
            {/*<Statistic />*/}
            <Gallery />
            <Footer />
        </div>
    );
}

export default Content;
