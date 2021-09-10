import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickBuy } = props;

  return(
    <>
      <table>
        <tr>
          <td colspan="2"><h3>Keg Detail</h3></td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{keg.name}</td>
        </tr>
        <tr>
          <td>Brand</td>
          <td>{keg.brand}</td>
        </tr>
        <tr>
          <td>Price</td>
          <td>{parseInt(keg.price).toFixed(2)}</td>
        </tr>
        <tr>
          <td>ABV</td>
          <td>{parseInt(keg.abv).toFixed(1)}%</td>
        </tr>
        <tr>
          <td>Quantity</td>
          <td>{keg.quantity}</td>
        </tr>
        <tr>
          <td>Buy</td>
          <td><button onClick={() => onClickBuy(keg)}>Buy One Pint</button></td>
        </tr>
      </table>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickBuy: PropTypes.func
};

export default KegDetail;