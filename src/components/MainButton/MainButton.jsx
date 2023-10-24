import React, { useContext, useEffect, useState } from 'react';
// import { useDispatch } from "react-redux";
// import { useSelector } from 'react-redux';

import styles from './MainButton.module.scss';



function MainButton(props) {

    const {
        text,
        action
    } = props;





    return (
        <button className={styles.btn} onClick={action}>{text}</button>
    );
}

export default MainButton;