import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function ListMenu(props){
  return (
    <>
      {/* <table>
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th>Price</th>
          <th>ABV</th>
          <th>Quantity</th>
          <th>Buy</th>
        </tr>
       */}
      <hr/>
        {props.kegList.map((keg) =>
          <Keg 
            whenKegClicked={props.onKegSelection} 
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            id={keg.id}
            key={keg.id} />
          )}
      {/* </table> */}
    </>
  )
}

ListMenu.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}

export default ListMenu;