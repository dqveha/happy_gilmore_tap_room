import React from "react";
import LocationContact from "./LocationContact";
import ListMenu from "./ListMenu";
import NewKegForm from "./NewKegForm";
import TapRoomInfo from "./TapRoomInfo";

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList,
                    formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <ListMenu kegList={this.state.masterKegList} />
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