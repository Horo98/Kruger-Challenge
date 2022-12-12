
import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import axios from 'axios';
import { Link } from 'react-router-dom';

function AccountInfo() {


    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [id, setId] = useState("")
    const [username, setUsername] = useState("")

    useEffect(() => {
        verificar()
        usuario()
    }, [id])

    const [data, setData] = useState([])
    const [hola, setHola] = useState("")
    const verificar = () => {
        try {
            const cookies = new Cookies();
            const token = cookies.get("token");
            if (token) {
                const tokenDecode = jwt_decode(token);
                return (
                    setId(tokenDecode.id),
                    setLastname(tokenDecode.lastname),
                    setUsername(tokenDecode.username),
                    setEmail(tokenDecode.email)

                )

                    ;
            }
            return 0;
        } catch (error) {
            return 0;
        }
    };
    const cambiar = () => {
        axios.put(`http://localhost:3001/users/${id}`, {lastname: "cambio"})
      };
      const usuario = () => {
        fetch(`http://localhost:3001/users/${id}`).then(response => response.json()).then(data => (setData(data)));


      };
    if (id){

    
    return (
        <div>

                <h1>Datos de tu cuenta:</h1>

            <h2>Nombre: {username}</h2>
            <h2>Apellido: {lastname}</h2>
            <h2>Email: {email}</h2>
            <h2>Id: {id}</h2>
            <br></br>
                {data.birth && <h2>Fecha de nacimiento : {data.birth}</h2>}
                {data.domicilio && <h2>domicilio : {data.domicilio}</h2>}
                {data.telefono && <h2>telefono : {data.telefono}</h2>}
                {data.vacunacion && <h2>Estado : {data.vacunacion}</h2>}
                {data.tipoVacuna && <h2>tipo Vacuna : {data.tipoVacuna}</h2>}
                {data.fechavacuna && <h2>fecha vacuna : {data.fechavacuna}</h2>}
                {data.numerodosis && <h2>numero dosis : {data.numerodosis}</h2>}

<button><Link to="/user">Agregar informacion</Link></button>
        </div>
    )
}
else{
    return(
    <div>

    <h1>Inicia sesion para ver los datos de tu cuenta!</h1>



</div>
)
}
}

export default AccountInfo