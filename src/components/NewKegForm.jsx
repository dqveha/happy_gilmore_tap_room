import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  const myStyledComponentStyles = {
    width: '100%',
  }

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
        <table style={myStyledComponentStyles}>
          <tr>
            <td>Name</td>
            <td>
              <input
              type='text'
              name='name'
              className="form-control" />
            </td>
          </tr>
          <tr>
            <td>Brand</td>
            <td>
              <input
              type='text'
              name='brand'
              className="form-control" />
            </td>
          </tr>
          <tr>
            <td>Price</td>
            <td>
              <input
              type='number'
              step='0.01'
              name='price'
              className="form-control" />
            </td>
          </tr>
          <tr>
            <td>ABV</td>
            <td>
              <input
              type='number'
              step='0.1'
              name='abv'
              className="form-control" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td colspan="2"><button type='submit' className="form-control btn-success" >Add Keg</button></td>
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