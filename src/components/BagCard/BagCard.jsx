import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './BagCard.scss';
import PropTypes from 'prop-types';
import Modal from "../Modal/Modal";
import { changeActive } from "../../store/modal/actions";

function BagCard({ removeFromBagAction, id, name, price, picture, color, code }) {
     const modal = useSelector(state => state.modal);
     
     const dispatch = useDispatch();
     const changeActiveAction = (event) => dispatch(changeActive(event))

     return (
          <div className='BagCard'>
               <div className="BagCard__picture">
                    <img src={picture} alt={name} />
               </div>
               <div className='BagCard__infoContainer'>
                    <p className="BagCard__name">{name}</p>
                    <p className="BagCard__price">{price}$</p>
                    <p className="BagCard__color">
                         <span style={{
                              background: `${color}`
                         }} className="BagCard__colorCycle"></span>
                         <span className="BagCard__colorSpan">{color}</span>
                    </p>
                    <p className='BagCard__code'>code: {code}</p>
               </div>
               <button className='BagCard__removeBtn' data-id={id} onClick={changeActiveAction}>Delete</button>
               {
                    parseInt(modal.activeID) === id && <Modal
                         id={id}
                         headerText={'Do you want remove this item from bag?'}
                         contentText={
                              `Do you want to remove ${name} for ${price}$ from your shopping bag?
                              Click "ok" to continue.`
                         }
                         transferredFunc={removeFromBagAction}
                    />
               }
          </div>
     )
}

BagCard.propTypes = {
     removeFromBagAction: PropTypes.func,
     id: PropTypes.number,
     name: PropTypes.string,
     price: PropTypes.number,
     picture: PropTypes.string,
     color: PropTypes.string,
     code: PropTypes.number
}

export default BagCard ;