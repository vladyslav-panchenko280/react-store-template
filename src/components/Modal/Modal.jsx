import React from "react";
import './Modal.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'
import { changeActive } from "../../store/modal/actions";

function Modal({ transferredFunc, headerText, contentText, id }) {
     
     const products = useSelector(state => state.products);

     const dispatch = useDispatch();
     const changeActiveAction = (event) => dispatch(changeActive(event))
     
     return (
          <div className="modal-overlay modal--active"
               onClick={(event) => {
                    if (event.target.className === 'modal-overlay modal--active') changeActiveAction();
               }}>
               <div className="modal">
                    <div className="modal__header">
                         <p className="modal__header-text">{headerText}</p>
                    </div>
                    <p className="modal__text">{contentText}</p>
                    <div
                         className="modal__btn-container">
                         <button className="modal__btn" onClick={ (event) => {
                               transferredFunc(event, products.products)
                               changeActiveAction(event);
                         }} data-id={id}>Ok</button>
                         <button className="modal__btn" onClick={changeActiveAction}>Cancel</button>
                    </div>

               </div>
          </div>
     )
}


Modal.propTypes = {
     transferredFunc: PropTypes.func,
     headerText: PropTypes.string,
     contentText: PropTypes.string,
     id: PropTypes.number
}

export default Modal;