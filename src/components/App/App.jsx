import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

import styles from './App.module.scss';

import Content from '../Content/Content';


function App() {

  // const [isLoader, setIsLoader] = useState(false);
  // const dispatch = useDispatch();


  useEffect(() => {


  }, [])







  return (
    <section className={styles.app}>

      <Content />


    </section>
  );
}

export default App;
