import './Catalog.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFav } from '../../store/favourite/actions';
import { addToBag } from '../../store/bag/actions';
import Loading from '../../components/Loading/Loading'
import CatalogCard from '../../components/CatalogCard/CatalogCard';

function Catalog() {
     const dispatch = useDispatch();
     const addToBagAction = (event, data) => dispatch(addToBag(event, data));
     const toggleFavAction = (event, data) => dispatch(toggleFav(event, data));

     const products = useSelector(state => state.products);

     return (
          products.isLoading ?
          <Loading /> :

          <ul className="catalog">
               {
                    products.products.map(el => {
                         const { id, name, price, picture, code, color } = el;

                         return (
                              <li key={id} className="catalog__item">
                                   <CatalogCard
                                        id={id}
                                        name={name}
                                        price={price}
                                        picture={picture}
                                        code={code}
                                        color={color}
                                        addToBagAction={addToBagAction}
                                        toggleFavAction={toggleFavAction}
                                   />
                              </li>
                         )
                    })
               }
          </ul>
     )
}

export default Catalog;