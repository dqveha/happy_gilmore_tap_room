import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function ListMenu(props){

  const myStyledComponentStyles = {
    width: '100%',
  }

  return (
    <>
      <table className="ListMenu table" style={myStyledComponentStyles}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Quantity</th>
          </tr>
        </thead>
      {/* </table> */}
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