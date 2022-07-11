import './Bag.scss';
import React from 'react';
import BagCard from '../../components/BagCard/BagCard'
import Loading from '../../components/Loading/Loading';
import NeedToLoginPage from '../NeedToLoginPage/NeedToLoginPage';
import PurchaseForm from '../../components/PurchaseForm/PurchaseForm';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBag } from '../../store/bag/actions';
import EmptyPage from '../EmptyPage/EmptyPage';

function Bag() {
     const dispatch = useDispatch();
     const removeFromBagAction = (event, data) => dispatch(removeFromBag(event, data));

     const authentication = useSelector(state => state.authentication);
     const bag = useSelector(state => state.bag);
     const products = useSelector(state => state.products);

     return (
          <>
               {
                    products.isLoading ?
                         <Loading /> :
                         authentication.authentication ?
                              bag.bagItems.length > 0 ?
                                   <article className='bag'>
                                        <section className='bag__items'>
                                             <ul className='bag__list'>
                                                  {
                                                       bag.bagItems.map(el => {
                                                            const { id, name, price, picture, color, code } = el;

                                                            return (
                                                                 <li key={id}>
                                                                      <BagCard
                                                                           removeFromBagAction={removeFromBagAction}
                                                                           id={id}
                                                                           name={name}
                                                                           price={price}
                                                                           picture={picture}
                                                                           color={color}
                                                                           code={code}
                                                                      />
                                                                 </li>
                                                            )
                                                       })
                                                  }
                                             </ul>
                                        </section>
                                        <section className='bag__form'>
                                             <PurchaseForm />
                                        </section>
                                   </article>
                                   : <EmptyPage />
                              : <NeedToLoginPage />
               }
          </>
     )
}

export default Bag;