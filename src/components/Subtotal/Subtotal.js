import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
export default class Subtotal extends Component {
  render() {
    return (
      <div>
        <Row className="show-grid">
          <Col md={6}>Subtotall</Col>
          <Col md={6}>{`$${this.props.price}`}</Col>
        </Row>
      </div>
    );
  }
}
