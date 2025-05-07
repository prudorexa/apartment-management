import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from "./components/Register";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Apartments from './components/Apartments';
import ApartmentDetails from './components/ApartmentDetails';
import BookingForm from './components/BookingForm';
import TenantDashboard from './components/TenantDashboard';
// import LandlordDashboard from "./LandlordDashboard";
// import PrivateRoute from "./PrivateRoute";
import './index.css'


const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/apartments/:id" element={<ApartmentDetails />} />
          <Route path="/booking-form" element={<BookingForm />} />
          <Route path="/tenant-dashboard" element={<TenantDashboard />} />

        {/* Role-based protected routes */}
        {/* <Route path="/tenant-dashboard" element={<PrivateRoute allowedRoles={["tenant"]}><TenantDashboard /></PrivateRoute>} /> */}
        {/* <Route path="/landlord-dashboard" element={<PrivateRoute allowedRoles={["landlord"]}><LandlordDashboard /></PrivateRoute>} /> */}
        </Routes>
      <Footer />
    </Router>
  )
}
export default App