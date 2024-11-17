import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function Doctors() {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="">
      <p className="text-gray-600 my-5 font-medium">
        Browse through the doctors specialist.
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 my-8">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={`cursor-pointer border rounded px-6 py-3 transition-all ${speciality==="Gynecologist"? 'bg-green-100 text-black':''}` }
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={`cursor-pointer border rounded px-6 py-3 transition-allm ${speciality=="General physician"?'bg-green-100 text-black':''}`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={`cursor-pointer border rounded px-6 py-3 transition-all ${speciality=="Dermatologist"?'bg-green-100 text-black':''} `}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className={`cursor-pointer border rounded px-6 py-3 transition-all ${speciality=="Pediatricians"?'bg-green-100 text-black':''} `}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={`cursor-pointer border rounded px-6 py-3 transition-all ${speciality=="Neurologist"?'bg-green-100 text-black':''} `}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologis"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologis")
            }
            className={`cursor-pointer border rounded px-6 py-3 transition-all ${speciality=="Gastroenterologis"?'bg-green-100 text-black':''} `}
          >
            Gastroenterologis
          </p>
        </div>

        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointments/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-8px] transition-all duration-300"
              key={index}
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="px-2 flex gap-2 items-center">
                <p className="w-2 h-2 rounded-full bg-green-500 "></p>
                <p className="text-green-500 font-medium">Availble</p>
              </div>
              <p className=" px-2 text-lg font-medium">{item.name}</p>
              <p className="text-sm px-2 pb-1">{item.speciality}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
