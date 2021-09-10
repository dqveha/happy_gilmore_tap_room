import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, abv: event.target.abv.value, id: v4() })
  }

  return (
    <>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='number'
          step='0.01'
          name='price'
          placeholder='Price' />
        <input
          type='number'
          step='0.1'
          name='abv'
          placeholder='ABV' />
        <button type='submit'>Add Keg</button>
      </form>
    </>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;