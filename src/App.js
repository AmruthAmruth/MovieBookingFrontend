import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Componets/Home';
import Navbar from './Componets/Navbar';
import Footer from './Componets/Footer';
import Login from './Componets/Login';
import Signup from './Componets/Signup';
import ViewMore from './Componets/ViewMore';
import SeatBooking from './Componets/SeatBooking'; 
import Profile from './Componets/Profile';
import UpdateProfile from './Componets/UpdateProfile';
import ChangePassword from './Componets/ChangePassword';
import AdminHome from './AdminComponent/AdminHome';
import AdminNavbar from './AdminComponent/AdminNavbar';
import AdminViewMore from './AdminComponent/AdminViewMore';
import AdminAddMovie from './AdminComponent/AdminAddMovie';
import AdminEditMovie from './AdminComponent/AdminEditMovie';
import AdminProfile from './AdminComponent/AdminProfile';
import AdminLogin from './Componets/AdminLogin';
import Cookies from 'js-cookie'
import AdminUsers from './AdminComponent/AdminUsers';
import AdminBookings from './AdminComponent/AdminBookings';
const App = () => {
  const adminId= Cookies.get('adminId')
  
  
  return (
    <Router>
      {!adminId ? (
        <section>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/viewmore" element={<ViewMore />} />
            <Route path="/seatbooking" element={<SeatBooking />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/updateprofile" element={<UpdateProfile />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
          </Routes>
          <Footer />
        </section>
      ) :
      <section>
         <AdminNavbar/>
          <Routes>
            <Route path="/" element={<AdminHome/>} />
            <Route path="/viewmore" element={<AdminViewMore/>} />
            <Route path="/addmovie" element={<AdminAddMovie/>} />
            <Route path="/updatemovie" element={<AdminEditMovie/>} />
            <Route path="/profile" element={<AdminProfile/>} />
            <Route path="/users" element={<AdminUsers/>} />
            <Route path="/booking" element={<AdminBookings/>} />
          </Routes>
          <Footer/>
        </section>
      
      }
    </Router>

  )
}

export default App
