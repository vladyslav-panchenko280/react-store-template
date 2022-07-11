import './PurchaseForm.scss';
import React from 'react';
import purchaseSchema from './purchaseSchema';
import { clearBag } from '../../store/bag/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const CustomErrorMessage = ({ name }) => (
     <ErrorMessage name={name}>
          {message => (
               <div className='error'>
                    <i>{message}</i>
               </div>
          )}
     </ErrorMessage>
)


function PurchaseForm() {
     const dispatch = useDispatch();
     const clearBagAction = () => dispatch(clearBag());
     const bagItems = useSelector(state => state.bag.bagItems);
     const totalPrice = useSelector(state => state.bag.totalPrice);

     return (
          <div className='purchaseForm'>
               <Formik
                    initialValues={{
                         name: '',
                         surname: '',
                         age: '',
                         address: '',
                         phoneNumber: ''
                    }}
                    validationSchema={purchaseSchema}
                    onSubmit={(values, actions) => {
                         console.log('Form was submitted');
                         actions.resetForm();
                         clearBagAction();
                         bagItems.forEach(item => console.log(item))
                    }}
               >
                    {propsFormik => {
                         return (
                              <Form>
                                   <div className='purchaseForm__inputContainer'>
                                        <label className='purchaseForm__inputLabel'>Name</label>
                                        <Field className='purchaseForm__input' type='text' name='name' />
                                        <CustomErrorMessage name='name' />
                                   </div>
                                   <div className='purchaseForm__inputContainer'>
                                        <label className='purchaseForm__inputLabel'>Surname</label>
                                        <Field className='purchaseForm__input' type='text' name='surname' />
                                        <CustomErrorMessage name='surname' />
                                   </div>
                                   <div className='purchaseForm__inputContainer'>
                                        <label className='purchaseForm__inputLabel'>Age</label>
                                        <Field className='purchaseForm__input' type='text' name='age' />
                                        <CustomErrorMessage name='age' />
                                   </div>
                                   <div className='purchaseForm__inputContainer'>
                                        <label className='purchaseForm__inputLabel'>Address</label>
                                        <Field className='purchaseForm__input' type='text' name='address' />
                                        <CustomErrorMessage name='address' />
                                   </div>
                                   <div className='purchaseForm__inputContainer'>
                                        <label className='purchaseForm__inputLabel'>Phone number</label>
                                        <Field className='purchaseForm__input' type='tel' name='phoneNumber' />
                                        <CustomErrorMessage name='phoneNumber' />
                                   </div>
                                   <div className='purchaseForm__inputContainer'>
                                        <p className='purchaseForm__total'>Total: {totalPrice}$</p>
                                   </div>
                                   <button className='purchaseForm__button' type='submit'>Purchase</button>
                              </Form>
                         )
                    }}
               </Formik>
          </div>
     )
}

export default PurchaseForm;