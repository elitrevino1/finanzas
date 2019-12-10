import api from "./api";
import { setPropiedadMovimiento } from "../actions/movimientosActions";

const route = "/movimientos";

export default {
  getMovimientos: (idUsuario, fechaInicio, fechaFin) =>
    api.get(
      `${route}/${idUsuario}?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`
    ),
  postMovimientos: (idUsuario, descripcion, monto, categoria, fecha, ingreso) =>
    api.post(`/${route}`, {
      idUsuario: idUsuario,
      nombre: setPropiedadMovimiento.getElementsByName(descripcion),
      monto: setPropiedadMovimiento.getElementsByName(monto),
      idCategoria: setPropiedadMovimiento.getElementsByName(categoria),
      fecha: setPropiedadMovimiento.getElementsByName(fecha),
      ingreso: setPropiedadMovimiento.getElementsByName(ingreso)
    })
};
