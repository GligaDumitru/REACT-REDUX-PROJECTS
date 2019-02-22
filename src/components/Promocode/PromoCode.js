import React, { Component } from "react";
import {
  Button,
  Collapse,
  Row,
  Col,
  Form,
  FormLabel,
  FormControl,
  FormGroup
} from "react-bootstrap";

import { connect } from "react-redux";
import { handleChange } from "../../actions/promoCodeActions";

class PromoCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      value: ""
    };
  }

  handleChange = e => {
    this.props.handleChange(e);
  };
  render() {
    const { open } = this.state;
    return (
      <div>
        <Button
          className="promo-code-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {open ? "Apply " : "Hide "}
          promo code
          {open ? ` +` : ` -`}
        </Button>
        <Collapse in={open}>
          <div>
            <Row className="show-grid">
              <Col md={12}>
                <Form>
                  <FormGroup controlId="formInLineName">
                    <FormLabel>Promo Code</FormLabel>
                    <FormControl
                      type="text"
                      placeholder="Enter promo"
                      value={this.props.promoCode}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <Button
                    block
                    bsStyle="success"
                    className="btn-round"
                    disabled={this.props.isDisabled}
                    onClick={this.props.giveDiscount}
                  >
                    Apply
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </Collapse>
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
)(PromoCode);
