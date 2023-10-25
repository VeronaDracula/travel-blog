import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Personal.module.scss';

import Tabs from '../Tabs/Tabs';
import PersonalAbout from './PersonalAbout/PersonalAbout';
import PersonalCountries from './PersonalCountries/PersonalCountries';
import PersonalStatistics from './PersonalStatistics/PersonalStatistics';
import PersonalGallery from './PersonalGallery/PersonalGallery';


function Personal() {
    const { section } = useParams();

    useEffect(() => {


    }, [])



    const initialTabs = [
        { name: 'Обо мне', link: '/personal', key: 0 },
        { name: 'Страны', link: '/personal/countries', key: 1 },
        { name: 'Статистика', link: '/personal/statistics', key: 2 },
        { name: 'Галерея', link: '/personal/gallery', key: 3 },
    ];


    const contentElement = {
        'countries': <PersonalCountries />,
        'statistics': <PersonalStatistics />,
        'gallery': <PersonalGallery />,
    };





    return (
        <section className={styles.personal}>
            <Tabs section={section} initialTabs={initialTabs} />
            {/* {contentElement[section]} */}
            {contentElement[section]
                ?
                contentElement[section]
                :
                <PersonalAbout />
            }

        </section>
    );
}

export default Personal;