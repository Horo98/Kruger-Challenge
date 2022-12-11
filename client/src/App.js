import logo from './logo.svg';
import { Route, Router } from "react-router-dom";
import './App.css';
import FormAdmin from './components/FormAdmin';
import FormUser from './components/FormUser';
import NavBar from "./components/NavBar"


function App() {
  return (
    <div className="App">
      <Route path=""><NavBar></NavBar></Route>
      <Route path="/admin">


        <FormAdmin />
      </Route>
      <Route path='/user'>
        <FormUser />
      </Route>
    


    </div>
  );
}

export default App;
