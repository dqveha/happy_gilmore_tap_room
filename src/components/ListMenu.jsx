import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function ListMenu(props){

  return (
    <>
      <table className="ListMenu table table-bordered border-dark text-center">
        <thead>
          <tr>
            <th colspan="4"><h2 className="text-center">Keg Inventory</h2></th>
          </tr>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Quantity</th>
          </tr>
          <tr>
            <td>
              {props.kegList.map((keg, index) =>
                <Keg 
                  whenKegClicked={props.onKegSelection} 
                  serial={index+1}
                  id={keg.id}
                  key={keg.id}
                />
              )}
            </td>
            <td>
              {props.kegList.map((keg) =>
                <Keg 
                  whenKegClicked={props.onKegSelection} 
                  name={keg.name}
                  id={keg.id}
                  key={keg.id} 
                />
              )}
            </td>
            <td>
              {props.kegList.map((keg) =>
                <Keg 
                  whenKegClicked={props.onKegSelection} 
                  brand={keg.brand}
                  id={keg.id}
                  key={keg.id} 
                />
              )}
            </td>
            <td>
              {props.kegList.map((keg) =>
                <Keg 
                  whenKegClicked={props.onKegSelection} 
                  id={keg.id}
                  key={keg.id}
                  quantity={keg.quantity} 
                />
              )}
            </td>
          </tr>
        </thead>
      </table>
    </>
  )
}

ListMenu.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}

export default ListMenu;