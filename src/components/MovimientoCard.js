import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class MovimientoCard extends Component {

    getIcon(categoria) {
        switch(categoria) {
            case 1:
                return "fas fa-film";
            case 2:
                return "fas fa-utensils";
            case 3:
                return "fas fa-car";
            default:
                return "";
        }
    }

    renderMonto() {
        if (this.props.ingreso) return <p className="text-success mb-0">{"+$"}{this.props.movimiento.monto}</p>;
        return <p className="text-danger mb-0">{"-$"}{this.props.movimiento.monto}</p>
    }

    render() {
        return (
            <Card className="p-1 mb-2 shadow border-0 font-weight-bold">
                <Row className="align-items-center mr-0">
                    <Col xs={2} className="text-center">
                        <i className={ "fa-2x text-center " + this.getIcon(this.props.movimiento.categoria)}></i>
                    </Col>
                    <Col xs={6}>
                        <span className="align-middle">{this.props.movimiento.nombre}</span>
                    </Col>
                    <Col xs={3}>
                        {this.renderMonto()}
                    </Col>
                    <Col xs={1} className="pl-0">
                        <i className="fa fa-chevron-down"></i>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default MovimientoCard;