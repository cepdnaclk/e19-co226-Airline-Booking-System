import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthService from "./services/auth.service";
import "./App.css";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import {About} from "./components/About";
import {MyBooking} from "./components/MyBooking";
import {Booking} from "./components/Booking"
import {Flight} from "./components/Flight";
import { Home } from "./components/Home";
import { AdminHome } from "./components/AdminHome";
import { AddAirPort } from "./components/AddAirport";
import { Display } from "./components/Display";
import { AdminLogin } from "./components/AdminLogin";
import { BookingForm } from "./components/BookingForm";


function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user.role);
      console.log(user.role);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div className="App">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/MyBooking" element={<MyBooking />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/airport" element={<AddAirPort />} />
          <Route path="/display" element={<Display />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/bookingForm" element={<BookingForm />} />

        </Routes>
    </div>
  );
}

export default App;
