import React from "react";
import LocationContact from "./LocationContact";
import ListMenu from "./ListMenu";
import NewKegForm from "./NewKegForm";
import TapRoomInfo from "./TapRoomInfo";
import KegDetail from "./KegDetail";

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null
    };
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({
      selectedKeg: selectedKeg
    });
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList, formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedTicket != null) {
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} />
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <ListMenu kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg";
    }

    return (
      <>
        <h3>Body</h3>
        {/* <table>
          <tr>
            <th><LocationContact /></th>
            <th rowspan="2">{currentlyVisibleState}<button onClick={this.handleClick}>{buttonText}</button></th>
            <th rowspan="2"><NewKegForm /></th>
          </tr>
          <tr>
            <th><TapRoomInfo /></th>
          </tr>
        </table> */}
          <LocationContact />
          <TapRoomInfo />
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default Body;