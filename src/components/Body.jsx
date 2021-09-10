import React from "react";
import LocationContact from "./LocationContact";
import ListMenu from "./ListMenu";
import NewKegForm from "./NewKegForm";

function Body() {
  return (
    <>
      <h3>Body</h3>
      <table>
        <tr>
          <th><LocationContact /></th>
          <th></th>
          <th rowspan="2"><ListMenu /></th>
          <th></th>
          <th><NewKegForm /></th>
        </tr>
      </table>
    </>
  );
}

export default Body;