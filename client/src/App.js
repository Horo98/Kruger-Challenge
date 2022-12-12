import logo from './logo.svg';
import { Route, Router } from "react-router-dom";
import './App.css';
import FormAdmin from './components/FormAdmin';
import FormUser from './components/FormUser';
import NavBar from "./components/NavBar"
import Register from './components/Register/Register';
import LoginUser from "./components/LoginUser/LoginUser"
import Home from './components/Home';
import AccountInfo from './components/accountInfo';
import Logout from './components/LoginUser/Logout';

function App() {
  return (
    <div className="App">
      <Route path=""><NavBar></NavBar></Route>
      <Route path=""><Logout/></Route>
      <Route path="/admin">

      <Register />
      </Route>
      <Route path="/home"><Home></Home></Route>
      <Route path='/user'>
        <FormUser />
      </Route>


      <Route exact path="/">
        <LoginUser />
      </Route>
      <Route path="/account">
      <AccountInfo/>

      </Route>

    </div>
  );
}

export default App;
