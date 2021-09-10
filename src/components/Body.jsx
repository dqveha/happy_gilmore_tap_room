import React from "react";
import LocationContact from "./LocationContact";
import ListMenu from "./ListMenu";
import NewKegForm from "./NewKegForm";
import TapRoomInfo from "./TapRoomInfo";

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <ListMenu />
      buttonText = "Add Keg";
    }

    return (
      <>
        <h3>Body</h3>
        <table>
          <tr>
            <th><LocationContact /></th>
            <th rowspan="2">{currentlyVisibleState}<button onClick={this.handleClick}>{buttonText}</button></th>
            {/* <th rowspan="2"><NewKegForm /></th> */}
          </tr>
          <tr>
            <th><TapRoomInfo /></th>
          </tr>
        </table>
      </>
    );
  }
}

export default Body;