import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: event.target.price.value, 
      abv: event.target.abv.value, 
      quantity: 124,
      id: v4() })
  }

  return (
    <>
      <form onSubmit={handleNewKegFormSubmission}>
        <table>
          <tr>
            <td>Name</td>
            <td>
              <input
              type='text'
              name='name'/>
            </td>
          </tr>
          <tr>
            <td>Brand</td>
            <td>
              <input
              type='text'
              name='brand' />
            </td>
          </tr>
          <tr>
            <td>Price</td>
            <td>
              <input
              type='number'
              step='0.01'
              name='price'/>
            </td>
          </tr>
          <tr>
            <td>ABV</td>
            <td>
              <input
              type='number'
              step='0.1'
              name='abv'/>
            </td>
          </tr>
          <tr>
            <td colspan="2"><button type='submit'>Add Keg</button></td>
          </tr>
        </table>
      </form>
    </>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;