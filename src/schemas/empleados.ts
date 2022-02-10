import { Schema, model } from 'mongoose'
const empleadoSchema = new Schema({
    idEmpleado: Number,
    nombre: String,
    email: String,
    telefono: String,
    sueldobase: {
        type: Number,
        default: 950
    },
    comisionventa: Number,
})



export type totEmpleados = {
    idEmpleado: number,
    nombre: string,
    email: string,
    telefono: string,
    sueldobase: number,
    comisionventa: number,
}

export const modeloEmpleado = model('empleados', empleadoSchema)