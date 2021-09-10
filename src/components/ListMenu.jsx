import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function ListMenu(props){
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th>Price</th>
          <th>ABV</th>
          <th>Quantity</th>
          <th>Buy</th>
        </tr>
        
        {props.kegList.map((keg, index) =>
          <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            key={index} />
          )}
      </table>
    </>
  )
}

ListMenu.propTypes = {
  kegList: PropTypes.array
}

export default ListMenu;