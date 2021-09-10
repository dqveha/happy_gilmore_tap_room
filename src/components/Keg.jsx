import React from "react";
import PropTypes from "prop-types";

// state hook?

function Keg(props){
  return (
    <>
      <tr>
        <td>{props.name} </td>
        <td>{props.brand} </td>
        <td>{props.price} </td>
        <td>{props.abv} </td>
        <td>quantity</td>
        <td>button</td>
      </tr>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired
};

export default Keg;