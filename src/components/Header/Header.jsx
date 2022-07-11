import React from "react";
import './Header.scss';
import shoppingBag from './shopping-bag-icon.png';
import favouriteSVGHeader from './favouriteHeader.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeAuthentication } from '../../store/authentication/actions';

function Header() {
     const dispatch = useDispatch();
     const changeAuthenticationAction = () => dispatch(changeAuthentication());

     const authentication = useSelector(state => state.authentication);
     const favourite = useSelector(state => state.favourite);
     const bag = useSelector(state => state.bag);

     return (
          <header className="header">
               <div className="header__fixed">
                    <div className="header__box">
                         <Link to="OnlineStore" className="header__logo">
                              <p>LOGO</p>
                         </Link>

                         <Link to="bag" className="header__itemBox">
                              <div className="header__bag">
                                   <img src={shoppingBag} alt="shopping bag" />
                              </div>
                              <span className="header__span">{
                                   authentication.authentication ? `(${bag.bagItems.length} items)` : false
                              }</span>
                         </Link>

                         <Link to="favourite" className="header__itemBox">
                              <div className="header__favourite">
                                   <img src={favouriteSVGHeader} alt="favourite" />
                              </div>
                              <span className="header__span">{
                                   authentication.authentication ? `(${favourite.favItems.length} items)` : false
                              }</span>
                         </Link>

                         <button className="header__loginBtn" onClick={changeAuthenticationAction}>{authentication.authentication ? "Logout" : 'Login'}</button>
                    </div>
               </div>
          </header>
     )
}

export default Header;