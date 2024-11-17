import { assets } from "../assets/assets";

function Header() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary my-5 rounded-lg px-6 md:px-10 lg:px-20">
      {/* left side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight md:leading-tight lg:leading-tight">
          Book Appointments <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row text-white text-sm items-center font-light gap-3">
        <img className="w-28" src={assets.group_profiles} alt="" />
        <p>
          Simply browse throgh our extensive list of trusted doctors, <br className="hidden sm:block" />
          schedule your appointments hassel-free
        </p>
        </div>
        <a href="#speciality" className="flex items-center gap-2 px-8 py-3 bg-white rounded-full hover:scale-105 transition-all duration-300">
          Book Appointments <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* right side */}
      <div className="md:w-1/2 relative">
        <img className=" w-full md:absolute bottom-0 rounded-lg h-auto" src={assets.header_img} alt="" />
      </div>
    </div>
  );
}

export default Header;
