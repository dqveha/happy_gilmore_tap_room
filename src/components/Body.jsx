import React from "react";
import LocationContact from "./LocationContact";
import ListMenu from "./ListMenu";
import NewKegForm from "./NewKegForm";
import TapRoomInfo from "./TapRoomInfo";

function Body() {
  return (
    <>
      <h3>Body</h3>
      <table>
        <tr>
          <th><LocationContact /></th>
          <th rowspan="2"><ListMenu /></th>
          <th rowspan="2"><NewKegForm /></th>
        </tr>
        <tr>
          <th><TapRoomInfo /></th>
        </tr>
      </table>
    </>
  );
}

export default Body;