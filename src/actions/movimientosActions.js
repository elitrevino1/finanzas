import MovimientosService from "../services/MovimientosService";
import { MOVIMIENTOS_RECIBIDOS } from "./types";

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
      dispatch({ type: MOVIMIENTOS_RECIBIDOS, payload: movimientos })
  }).catch(error => {
      console.log(error.response);
  });
};
