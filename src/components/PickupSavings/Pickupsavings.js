import React, { Component } from "react";
import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

var styles = {
  pickupSavings: {
      display:'inline',
    textDecoration: "underline",
  },
  totalSavings: {
    color: "red",
    fontWeight: 800,
  }
};

export default class Pickupsavings extends Component {
  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <p>Picking up your order in the store helps cut cost,</p>
      </Tooltip>
    );

    return (
      <Row className="show-grid">
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div style={styles.pickupSavings}>Pickup savings</div>
          </OverlayTrigger>
        </Col>
        <Col md={6} style={styles.totalSavings}>
          {`$${this.props.price}`}
        </Col>
      </Row>
    );
  }
}
