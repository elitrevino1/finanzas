import React, { Component } from "react";
import Form from "react-bootstrap/form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Input extends Component {
  render() {
    return (
      <Row className="align-items-center mb-3">
        <Col xs={3}>
          <Form.Label className="font-weight-bold">
            {this.props.label}
          </Form.Label>
        </Col>
        <Col xs={9}>
          <Form.Control
            name={this.props.name}
            onChange={this.props.onChange}
            type={this.props.type}
            as={this.props.as ? this.props.as : undefined}
          />
        </Col>
      </Row>
    );
  }
}

export default Input;
