import React, { useContext } from 'react';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';





 const Logout = () => {
    
    const cookies = new Cookies()
    const history = useHistory();
    const onClickFunc = (e) => {
        e.preventDefault();
        cookies.remove('token')
       
        history.push('/account')
    }
    
  return (
    <div>

        <button class="btn btn-dark" onClick={(e) => { onClickFunc(e)}}>Deslogeo</button>
    </div>
  )
}

export default Logout
