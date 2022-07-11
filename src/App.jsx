import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './store/products/actions';
import Header from './components/Header/Header';
import Router from './router/router';
import './App.scss';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className='main'>
        <Router />
      </main>
    </>
  )
}

export default App;
