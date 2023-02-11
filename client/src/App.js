//import statement for bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
//Setting up the default login routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Pages/landing";
import Welcome from "./Pages/Welcome";
import GuestReserve from "./components/GuestReserve";
import UserReserve from "./components/UserReserve";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Confirmation from "./Pages/Confirmation";
import Payment from "./components/Payment";
import SubmitMessage from "./components/SubmitMessage";

function App() {
  return (
    //Setting the path to the element
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/GuestReserve" element={<GuestReserve />} />
          <Route path="/UserReserve" element={<UserReserve />} />
          <Route path="/Confirmation" element={<Confirmation />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Submit" element={<SubmitMessage />} />
        </Routes> 
      </Router>
  );
}

export default App;
