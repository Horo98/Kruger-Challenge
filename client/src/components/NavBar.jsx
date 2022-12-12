import React, { useEffect, useState } from 'react'
import { Link, NavLink} from "react-router-dom";
import Cookies from 'universal-cookie';
import jwt_decode from "jwt-decode";

function NavBar() {
   useEffect(() => {
    verificar()
     
   }, [])
   const [data, setData] = useState("")
  const verificar = () => {
    try {
        const cookies = new Cookies();
        const token = cookies.get("token");
        if (token) {
            const tokenDecode = jwt_decode(token);
            return (
              setData(tokenDecode.isAdmin),
              console.log(data)
              )

                ;
        }
        return 0;
    } catch (error) {
        return 0;
    }
};
if(data === true){
  
  return (
    <div className='padding'>
                <Link to="/admin">Cargar empleado</Link> 
                <br></br>
                <Link to="/home">Lista empleados</Link>
                <br></br>



    </div>
  )
}
else{
  return(
    <div className='padding'>

    <Link to="/">Login</Link>
    <br></br>
    <Link to="/account">Datos de cuenta</Link>
    <br></br>


</div>
  )
}
}

export default NavBar