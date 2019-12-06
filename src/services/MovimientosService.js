import api from "./api";

const route = "/movimientos";

export default {
    getMovimientos: (idUsuario, fechaInicio, fechaFin) =>
        api.get(`${route}/${idUsuario}?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`),
};