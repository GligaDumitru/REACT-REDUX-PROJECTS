import React, { Component } from "react";
import { Button, Collapse, Row, Col, Media } from "react-bootstrap";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    const { open } = this.state;
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {open ? "See" : "Hide"} item details
          {open ? ` +` : ` -`}
        </Button>
        <Collapse in={open}>
          <div className="showMoreDetails">
            <Media>
              <img
                width={100}
                height={100}
                alt="thumbnail"
                src="https://via.placeholder.com/100x100"
              />
              <Media.Body>
                <p>
                  Essentials by Oasdksa dksa dksa kdsa dkjsad sak dksadkjsa
                  dkjsad,red
                </p>
                <Row className="show-grid">
                  <Col md={6}>
                    <span>{`$${this.props.price}`}</span>
                    <br />
                    <span className="price-strike">
                      {`$${this.props.price}`}
                    </span>
                  </Col>
                </Row>
              </Media.Body>
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}
