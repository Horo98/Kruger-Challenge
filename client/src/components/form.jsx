import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';

function Form() {
    const [id, setId] = useState("")
    const history = useHistory();
    function handleSubmit(e) {
        e.preventDefault()        
        axios.put(`http://localhost:3001/users/${id}`, input)
        
        
        
    }
    const verificar = () => {
        try {
            const cookies = new Cookies();
            const token = cookies.get("token");
            if (token) {
                const tokenDecode = jwt_decode(token);
                return (
                    setId(tokenDecode.id)

                )

                    ;
            }
            return 0;
        } catch (error) {
            return 0;
        }
    };
    const [vacunado, setVacunado] = useState();
    useEffect(() => {
        verificar()
    }, [vacunado])

    function estadoVacuna(e){
        console.log(vacunado)
        setVacunado(e.target.value)
      

    }
        const cambiar = () => {
        
      };
      const [input, setInput] = useState({
        birth: null,
        domicilio: null,
        telefono: null,
        vacunacion: null,
        tipoVacuna: null,
        fechavacuna: null,
        numerodosis: null,
        
    })
    let handleChange = (e) => {
        e.preventDefault();
        setInput((prevInput) => {
            const newInput = {
                ...prevInput,
                [e.target.name]: e.target.value,
            }
            return newInput;
        })
    }
  return (
    <div>
    <form onSubmit={(e) => handleSubmit(e)}>

        <h1>Form User</h1>
        <label>Fecha de nacimiento<input onChange={e => handleChange(e)} value={input.birth} type="date" id="birth" name="birth" /></label>
        <label>Domicilio<input onChange={e => handleChange(e)} value={input.domicilio} type="text" id="domicilio" name="domicilio" /></label>
        <label>Telefono<input onChange={e => handleChange(e)} value={input.telefono} type="number" id="telefono" name="telefono" /></label>
        <label onChange={(e) => estadoVacuna(e)}>Estado de Vacunacion<select onChange={e => handleChange(e)} name="vacunacion" value={input.vacunacion} id="vacunacion">
            <option hidden>Selecciona una opcion</option>
            <option value="vacunado">Vacunado</option>
            <option value="novacunado">No vacunado</option>
        </select>
            </label>
        { vacunado == "vacunado" ? <label>Nombre de vacuna
            <select onChange={e => handleChange(e)}  name="tipoVacuna" id="tipoVacuna">
            <option hidden>Selecciona una vacuna</option>
            <option value="Sputnik">Sputnik</option>
            <option value="AstraZeneca">AstraZeneca</option>
            <option value="Jhonson&Jhonson">Jhonson&Jhonson</option>
        </select>
        <label>Fecha de vacunacion<select onChange={e => handleChange(e)}  name="fechavacuna" id="fechavacuna">
            <option hidden>Fecha</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>

        </select></label>
        <label>Dosis<input onChange={e => handleChange(e)} value={input.numerodosis} type="number" id="numerodosis" name="numerodosis" /></label>
            </label>
            
         : null
        }
        <input type="submit" value="Enviar" />
    </form>
</div>
  )
}

export default Form