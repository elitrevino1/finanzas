/*

*** Intenté hacer la parte del balance del mes como component
*** Spoiler alert: no pude (y quité el import del view bc,, ya no servía ahí)
*** Spoiler x2 : tampoco salia cuando hice todo en el view :(


import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Balance extends Component {
    render() {
        return (
            <Col xs={12}>
            <Row className='align-items-center'>
                <p>Balance del mes</p>
            </Row>
            <Row className='align-items-center'>
                <p className="text-info">$1024.53</p> 
            </Row>
            <Row>
                <Col xs={6}>
                    <Row className='align-items-center'>
                        <p className="text-success">Ingresos</p>
                    </Row>
                    <Row className='align-items-center'>
                        <p>$2345.00</p>
                    </Row>
                </Col>
                <Col xs={6}>
                    <Row className='align-items-center'>
                        <p className="text-danger">Ingresos</p>
                    </Row>
                    <Row className='align-items-center'>
                        <p>-$1320.47</p>
                    </Row>
                </Col>
            </Row>
            </Col>
        );
    }
}

export default Balance;

*/