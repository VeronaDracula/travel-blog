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
      <Routes>
        {/* <ProtectedRoute
                            path="/personal/:section?"
                            loggedIn={loggedIn}
                            component={Personal}
                        /> */}

        <Route path='travel-blog/signin' element={<Login />} />

        <Route path='travel-blog/personal/:section?' element={<Personal />} />

        <Route path='travel-blog/articles' element={<ArticleList />} />

        <Route path='travel-blog/article/:id' element={<Article />} />

        <Route path='/travel-blog' exact element={<Content />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default App;
