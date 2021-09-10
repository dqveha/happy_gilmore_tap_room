import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function ListMenu(props){
  return (
    <>
      {props.kegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          abv={keg.abv}
          key={index} />
        )}
    </>
  )
}

ListMenu.propTypes = {
  kegList: PropTypes.array
}

export default ListMenu;