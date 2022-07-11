import './Favourite.scss';
import React from 'react';
import CatalogCard from '../../components/CatalogCard/CatalogCard';
import Loading from '../../components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFav } from '../../store/favourite/actions';
import { addToBag } from '../../store/bag/actions';

function Favourite() {
     const dispatch = useDispatch();
     const addToBagAction = (event, data) => dispatch(addToBag(event, data));
     const toggleFavAction = (event, data) => dispatch(toggleFav(event, data));

     const favourite = useSelector(state => state.favourite);
     const products = useSelector(state => state.products);

     return (
          products.isLoading ?
               <Loading /> :
               <ul className="favourite">
                    {
                         favourite.favItems.map(el => {
                              const { id, name, price, picture, code, color } = el;

                              return (
                                   <li key={id} className="favourite__item">
                                        <CatalogCard
                                             id={id}
                                             name={name}
                                             price={price}
                                             picture={picture}
                                             code={code}
                                             color={color}
                                             toggleFavAction={toggleFavAction}
                                             addToBagAction={addToBagAction}
                                        />
                                   </li>
                              )
                         })
                    }
               </ul>
     )
}

export default Favourite;