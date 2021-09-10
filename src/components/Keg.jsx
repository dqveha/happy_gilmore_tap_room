import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <table>
          <tr>
            <td>{props.serial}</td>
            <td>{props.name} </td>
            <td>{props.brand} </td>
            <td>{props.quantity}</td>
          </tr>
        </table>
      </div>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  serial: PropTypes.number.isRequired,
  whenKegClicked: PropTypes.func
};

export default Keg;