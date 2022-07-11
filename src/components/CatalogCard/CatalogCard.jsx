import React from "react";
import PropTypes from 'prop-types';
import './CatalogCard.scss';
import favouriteSVG from './favourite.svg';
import favouriteActiveSVG from './favouriteActive.svg';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeActive } from "../../store/modal/actions";

function CatalogCard({ id, name, price, picture, code, color, addToBagAction, toggleFavAction }) {
     const dispatch = useDispatch();
     const changeActiveAction = (event) => dispatch(changeActive(event));

     const products = useSelector(state => state.products);
     const modal = useSelector(state => state.modal);
     const favourite = useSelector(state => state.favourite);
     const bag = useSelector(state => state.bag);

     const itemBag = bag.bagItems.filter(el => el.id === id);
     const itemFav = favourite.favItems.filter(el => el.id === id);
     return (
          <div className="CatalogCard">
               <div className="CatalogCard__picture">
                    <img src={picture} alt={name} />
               </div>
               <p className="CatalogCard__name">{name}</p>
               <p className="CatalogCard__price">{price}$</p>
               <p className="CatalogCard__color">
                    <span style={{
                         background: `${color}`
                    }} className="CatalogCard__colorCycle"></span>
                    <span className="CatalogCard__colorSpan">{color}</span>

               </p>

               <div className="CatalogCard__footer">
                    <p className="CatalogCard__code">code: {code}</p>
                    <button className={'CatalogCard__favButton'}>{
                         itemFav.length > 0 ?
                              <img src={favouriteActiveSVG} alt="favourite active" data-id={id} onClick={(event) => {
                                   toggleFavAction(event, products.products)
                              }} /> :
                              <img src={favouriteSVG} alt="favourite" data-id={id} onClick={(event) => {
                                   toggleFavAction(event, products.products)
                              }} />
                    }</button>
                    {
                         itemBag.length > 0 ?
                              <Link to='../bag' className="CatalogCard__link">
                                   <button className="CatalogCard__ctaButton CatalogCard__ctaButton--added">Go to bag</button>
                              </Link> :
                              <button className="CatalogCard__ctaButton" data-id={id} onClick={changeActiveAction}>Buy</button>
                    }
               </div>
               {
                    parseInt(modal.activeID) === id && <Modal
                         headerText={`Do you want buy ${name}?`}
                         contentText={
                              `Do you want to add ${name} for ${price}$ to your shopping bag?
                              Click "ok" to continue.`
                         }
                         id={id}
                         transferredFunc={addToBagAction} />
               }

          </div>
     )
}

CatalogCard.propTypes = {
     id: PropTypes.number,
     name: PropTypes.string,
     price: PropTypes.number,
     picture: PropTypes.string,
     code: PropTypes.number,
     color: PropTypes.string,
     addToBagAction: PropTypes.func,
     toggleFavAction: PropTypes.func,
}

CatalogCard.defaultProps = {
     name: "Untitled product",
     price: 0,
     picture: "./data/products/pictures/no-image.jpg",
     code: 9999,
     color: "none"
}

export default CatalogCard;