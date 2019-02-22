import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./App.css";
import Subtotal from "./components/Subtotal/Subtotal";
import Pickupsavings from "./components/PickupSavings/Pickupsavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import PromoCode from "./components/Promocode/PromoCode";
import { connect } from "react-redux";
import { handleChange } from "./actions/promoCodeActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 100,
      pickupSavings: -3.87,
      taxesFees: 20,
      estimatedTotal: 0,
      disabledPromoButton: false
    };
  }

  componentDidMount() {
    const { total, pickupSavings } = this.state;

    this.setState(
      {
        taxesFees: (total + pickupSavings) * 0.0875
      },
      () => {
        this.setState({
          estimatedTotal: total + pickupSavings + this.state.taxesFees
        });
      }
    );
  }

  giveDiscountHandler = () => {
    if (this.props.promoCode === "DISCOUNT") {
      this.setState(
        {
          estimatedTotal: this.state.estimatedTotal * 0.9
        },
        () => {
          this.setState({
            disabledPromoButton: true
          });
        }
      );
    }
  };

  render() {
    return (
      <div className="container">
        <Row>
          <Col className="purchase-card">
            <Subtotal price={this.state.total.toFixed(2)} />
            <Pickupsavings price={this.state.pickupSavings} />
            <TaxesFees taxesFees={this.state.taxesFees.toFixed(2)} />
            <hr />
            <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
            <ItemDetails price={this.state.total.toFixed(2)} />
            <hr />
            <PromoCode
              isDisabled={this.state.disabledPromoButton}
              giveDiscount={() => this.giveDiscountHandler()}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(App);
