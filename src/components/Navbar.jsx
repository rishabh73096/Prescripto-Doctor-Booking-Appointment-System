import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="flex items-center justify-between text-sm py-4 border-b border-b-gray-400">
      <img onClick={()=>navigate('/')} className="w-44 cursor-pointer" src={assets.logo} alt="" />
      <ul className="hidden md:flex gap-5 items-start font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none bg-primary outline-none h-0.5 w-3/5 m-auto hidden " />
        </NavLink>
        <NavLink to="doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none bg-primary outline-none h-0.5 w-3/5 m-auto  hidden" />
        </NavLink>
        <NavLink to="about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none bg-primary outline-none h-0.5 w-3/5 m-auto hidden " />
        </NavLink>
        <NavLink to="contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none bg-primary outline-none h-0.5 w-3/5 m-auto hidden " />
        </NavLink>
      </ul>

      <div className="flex items-center gap-3">
        {profile ? (
          <div className="flex items-center gap-2 group relative cursor-pointer">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute pt-14 top-0 right-0 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="px-5 py-5 min-w-48 flex flex-col gap-4 bg-stone-100">
                <p
                  className="hover:text-black"
                  onClick={() => navigate("my-appointments")}
                >
                  My Appointments
                </p>
                <p
                  className="hover:text-black"
                  onClick={() => navigate("my-Profile")}
                >
                  My Profile
                </p>
                <p onClick={() => setProfile(false)}>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary rounded-full px-4 py-3 text-white cursor-pointer font-light hidden md:block"
          >
            Create account
          </button>
        )}
      {/* mobile menu */}
        <img onClick={()=>setMobileMenu(true)} className="md:hidden w-6" src={assets.menu_icon} alt="" />
        <div className={`${mobileMenu?'fixed w-full':'h-0 w-0'} md:hidden bottom-0 top-0 right-0 overflow-hidden z-20 bg-white transition-all`}>
          <div className="flex items-center justify-between px-5 py-5">
            <img className="w-36" src={assets.logo} alt="" />
            <img className="w-20" onClick={()=>setMobileMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className="flex items-center justify-center flex-col gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={()=>setMobileMenu(false)} to='/'>HOME</NavLink>
            <NavLink onClick={()=>setMobileMenu(false)} to='/doctors'>ALL DOCTOR</NavLink>
            <NavLink onClick={()=>setMobileMenu(false)} to='/about'>ABOUT</NavLink>
            <NavLink onClick={()=>setMobileMenu(false)} to='/contact'>CONTACT</NavLink>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
