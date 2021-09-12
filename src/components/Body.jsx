import React from "react";
import LocationContact from "./LocationContact";
import ListMenu from "./ListMenu";
import NewKegForm from "./NewKegForm";
import TapRoomInfo from "./TapRoomInfo";
import KegDetail from "./KegDetail";
import { Container, Row, Col } from "react-bootstrap"

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null
    };
  }

  buyPint = (keg) => {
    if (keg.quantity > 0) {
      keg.quantity--;
    } else {
      keg.quantity = "Out of Stock"
    }
    this.setState({selectedKeg: keg});
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

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail 
      onClickBuy={this.buyPint}
      keg={this.state.selectedKeg} />
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
        <Container>
          <Row>
              {currentlyVisibleState}
              <button onClick={this.handleClick}>{buttonText}</button>
          </Row>
          <hr />
          <Row>
            <Col className="border-end">
              <TapRoomInfo />  
            </Col>
            <Col>
              <LocationContact />
            </Col>
          </Row>
          <hr />
        </Container>
      </>
    );
  }
}

export default Body;