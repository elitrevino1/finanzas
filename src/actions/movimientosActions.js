import MovimientosService from "../services/MovimientosService";
import { MOVIMIENTOS_RECIBIDOS, SET_PROPIEDAD_MOVIMIENTO, EDIT_MOVIMIENTO } from "./types";

export const getMovimientos = (
  idUsuario,
  fechaInicio,
  fechaFin
) => dispatch => {
  MovimientosService.getMovimientos(
    idUsuario,
    fechaInicio,
    fechaFin
  ).then(res => {
      const movimientos = res.data.movimientos;
      console.log(movimientos);
      dispatch({ type: MOVIMIENTOS_RECIBIDOS, payload: movimientos })
  }).catch(error => {
      console.log(error.response);
  });
};

export const setPropiedadMovimiento = (key, value) => dispatch => {
    dispatch({ type: SET_PROPIEDAD_MOVIMIENTO, payload: {key, value} });
};

export const editMovimiento = movimiento => dispatch => {
    dispatch({ type: EDIT_MOVIMIENTO, payload: movimiento });
}
