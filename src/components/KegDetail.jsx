import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;
  return(
    <>

      <h3>Keg Detail</h3>
      <p>{keg.name} </p>
      <p>{keg.brand} </p>
      <p>{keg.price} </p>
      <p>{keg.abv} </p>
      <p>quantity</p>
      <p>button</p>


        {/* <tr>
          <td>{keg.name} </td>
          <td>{keg.brand} </td>
          <td>{keg.price} </td>
          <td>{keg.abv} </td>
          <td>quantity</td>
          <td>button</td>
        </tr> */}
      <hr/>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;