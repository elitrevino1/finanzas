import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import {
  getMovimientos,
  editMovimiento,
  setPropiedadMovimiento
} from "../actions/movimientosActions";
import { connect } from "react-redux";
import MovimientoCard from "../components/MovimientoCard";
import Spinner from "react-bootstrap/spinner";
import Button from "react-bootstrap/button";
import Form from "react-bootstrap/form";
import Input from "../components/Input";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

const idUsuario = 4;
const fechaInicio = "2019-12-01";
const fechaFin = "2019-12-31";

class Movimientos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: false
    };
  }

  componentDidMount() {
    this.props.getMovimientos(idUsuario, fechaInicio, fechaFin);
  }

  renderBalance() {
    return (
      <Jumbotron fluid>
        <Container>
          <Row className="align-items-center">
            <h1>Balance del mes</h1>
          </Row>
          <Row className="align-items-center">
            <p className="text-info">$1024.53</p>
          </Row>
          <Row>
            <Col xs={6}>
              <Row className="align-items-center">
                <p className="text-success">Ingresos</p>
              </Row>
              <Row className="align-items-center">
                <p className="text-success">$2345.00</p>
              </Row>
            </Col>
            <Col xs={6}>
              <Row className="align-items-center">
                <p className="text-danger">Gastos</p>
              </Row>
              <Row className="align-items-center">
                <p className="text-danger">-$1320.47</p>
              </Row>
            </Col>
          </Row>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link">
                  <p className="align-items-center">Analíticas</p>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse>
                <Card.Body>
                  <p className="align-items-center">
                    aquí va la gráfica que no supe poner :(
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </Jumbotron>
    );
  }

  renderMovimientos() {
    if (!this.props.movimientos)
      return <Spinner animation="border" variant="dark" />;
    if (this.props.movimientos.length === 0)
      return <p>No hay movimientos para este mes</p>;
    return this.props.movimientos.map(movimiento => (
      <MovimientoCard key={movimiento.idMovimiento} movimiento={movimiento} />
    ));
  }

  renderForm() {
    if (this.state.form && this.props.movimiento)
      return (
        <Form className="mt-4">
          <Input
            label="Nombre"
            name="descripcion"
            type="text"
            value={this.props.movimiento.descripcion}
            onChange={e =>
              this.props.setPropiedadMovimiento(e.target.name, e.target.value)
            }
          />
          <Input
            label="Monto"
            name="monto"
            type="number"
            value={this.props.movimiento.monto}
            onChange={e =>
              this.props.setPropiedadMovimiento(e.target.name, e.target.value)
            }
          />
          <Input
            label="Categoría"
            as="select"
            name="categoria"
            value={this.props.movimiento.categoria}
            onChange={e =>
              this.props.setPropiedadMovimiento(e.target.name, e.target.value)
            }
          />
          <Input
            label="Fecha"
            name="fecha"
            type="date"
            value={this.props.movimiento.fecha}
            onChange={e =>
              this.props.setPropiedadMovimiento(e.target.name, e.target.value)
            }
          />
          <Input
            label="Tipo"
            as="select"
            name="ingreso"
            value={this.props.movimiento.ingreso}
            onChange={e =>
              this.props.setPropiedadMovimiento(e.target.name, e.target.value)
            }
          />
          <Button onClick={() => console.log(this.props.movimiento)}>
            Subir
          </Button>
        </Form>
      );
  }

  render() {
    return (
      <Container fluid={true}>
        {this.renderMovimientos()}
        {this.renderForm()}
        <Button
          style={{
            position: "absolute",
            bottom: 10,
            width: "92%",
            margin: "auto",
            display: "block"
          }}
          onClick={() => {
            this.props.editMovimiento({
              idMovimiento: "nuevo",
              monto: "",
              categoria: "",
              ingreso: "",
              fecha: ""
            });
            this.setState({ form: !this.state.form });
          }}
        >
          Agregar Movimiento
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  movimientos: state.movimientos.movimientos,
  movimiento: state.movimientos.movimiento
});

export default connect(mapStateToProps, {
  getMovimientos,
  editMovimiento,
  setPropiedadMovimiento
})(Movimientos);
