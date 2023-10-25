import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes, useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

import styles from './App.module.scss';

import { getArticles } from '../../Redux/asyncThunks/getArticles';

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Content from '../Content/Content';
import Article from '../Article/Article';
import ArticleList from '../ArticleList/ArticleList';
import Personal from '../Personal/Personal';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';


function App() {

  const dispatch = useDispatch();




  const fetchCart = async () => {
    try {
      await dispatch(getArticles());

    } catch (error) {
      console.log('error\n', error);
    }
  };


  useEffect(() => {
    // fetchCart()

  }, [])







  return (
    <section className={styles.app}>
      {/*<Content />*/}
      <Routes>
        {/* <ProtectedRoute
                            path="/personal/:section?"
                            loggedIn={loggedIn}
                            component={Personal}
                        /> */}

        <Route path='/signin' element={<Login />} />

        <Route path='/personal/:section?' element={<Personal />} />

        <Route path='/articles' element={<ArticleList />} />

        <Route path='/article/:id' element={<Article />} />

        <Route path='/' exact element={<Content />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default App;
