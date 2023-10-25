import React, { useRef, useEffect, useState } from 'react';

import styles from './Tabs.module.scss';

import ReplaceLink from './ReplaceLink/ReplaceLink';


function Tabs(props) {

    const {
        section,
        initialTabs

    } = props;


    const tabsRef = useRef();
    const activeTabRef = useRef();


    const defaultKey = initialTabs[0].key;

    const [activeTab, setActiveTab] = useState(defaultKey);



    useEffect(() => {
        if (activeTabRef) {
            const activeTabLeft = activeTabRef?.current?.getBoundingClientRect()?.left;
            //   const linePositionCoord = activeTabLeft - tabsRef?.current?.getBoundingClientRect()?.left + tabsRef?.current?.scrollLeft;
            //   if (linePositionCoord !== linePosition) {
            // scrollToActiveTab(linePositionCoord);
            // setLinePosition(linePositionCoord);
            //   }
            //   if (activeTabRef.current.offsetWidth !== lineWidth) {
            //     setLineWidth(activeTabRef.current.offsetWidth);
            //   }
        }
    }, [activeTab]);




    return (
        <div className={styles.tabs}>
            {initialTabs.map((tab) => (
                <ReplaceLink className={styles.link} key={tab.key} to={tab.link}>
                    {activeTab === tab.key
                        ?
                        <span className={`${styles.tab} ${styles.tabActive}`} ref={activeTabRef}>{tab.name}</span>
                        :
                        <span className={styles.tab}>{tab.name}</span>
                    }
                </ReplaceLink>
            ))}

        </div>
    );
}

export default Tabs;