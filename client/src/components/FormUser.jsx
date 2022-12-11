import React, { useEffect, useState } from 'react'
import Form from "./form"

function FormUser() {

    return (
        <div>
            <Form/>
            
        </div>
    )
}
export default FormUser
// Como Empleado requiero ingresar al sistema para visualizar y actualizar mi información.
// Criterios de aceptación:
// a. Completar la siguiente información:
// ● Fecha de nacimiento.
// ● Dirección de domicilio.
// ● Teléfono móvil.
// ● Estado de vacunación: Vacunado / No Vacunado.
// ● Si el empleado está en estado vacunado, se debe pedir la siguiente información
// requerida:
// ○ Tipo de vacuna: Sputnik, AstraZeneca, Pfizer y Jhonson&Jhonson
// ○ Fecha de vacunación.
// ○ Número de dosis.
