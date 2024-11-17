import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Login from './Pages/Login'
import About from './Pages/About'
import Contact from './Pages/Contact'
import MyProfile from './Pages/MyProfile'
import MyAppointment from './Pages/MyAppointment'
import Appointments from './Pages/Appointments'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Doctors from "./Pages/Doctors"

 
 
 function App() {
   return (
     <div className="mx-3 sm:mx-[10%]">
       <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/doctors" element={<Doctors/>} />
         <Route path="/doctors/:speciality" element={<Doctors/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/my-profile" element={<MyProfile/>} />
         <Route path="/my-Appointments" element={<MyAppointment/>} />
         <Route path="/appointments/:docId" element={<Appointments/>} />
       </Routes>
       <Footer/>
     </div>
   )
 }
 
 export default App