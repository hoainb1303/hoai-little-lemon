import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import ReservationConfirm from "./pages/ReservationConfirm";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <Router className="main-layout" basename={process.env.PUBLIC_URL}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/reservation-confirm" element={<ReservationConfirm />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
