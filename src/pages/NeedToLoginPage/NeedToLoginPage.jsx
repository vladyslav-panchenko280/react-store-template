import './NeedToLoginPage.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeAuthentication } from '../../store/authentication/actions';

function NeedToLoginPage() {
     const dispatch = useDispatch();
     const changeAuthenticationAction = () => dispatch(changeAuthentication());

     return (
          <div className='needToLoginPage'>
               <p className='needToLoginPage__alertText'>Please, login to continue</p>
               <button className='needToLoginPage__loginBtn' onClick={changeAuthenticationAction}>Login</button>
          </div>
     )

}

export default NeedToLoginPage;