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
