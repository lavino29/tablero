import { Tabla } from "../models/Tabla.model.";

export const createMep = (mep: Tabla) =>({
    name: mep.name,
    status: mep.status,
    grupo: mep.grupo
})