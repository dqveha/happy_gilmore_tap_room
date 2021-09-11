import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function ListMenu(props){
  return (
    <>
      <table className="ListMenu">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Quantity</th>
        </tr>
      </table>
        {props.kegList.map((keg, index) =>
          <Keg 
            whenKegClicked={props.onKegSelection} 
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            id={keg.id}
            key={keg.id}
            serial={index+1}
            quantity={keg.quantity} />
          )}
    </>
  )
}

ListMenu.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}

export default ListMenu;