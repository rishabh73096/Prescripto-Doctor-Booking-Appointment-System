import { useContext, useEffect, useState } from "react"
import { AppContext } from "../Context/AppContext"
import { useNavigate } from "react-router-dom";

function RelatedDoctor({ docId, speciality }) {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [relatedDoctor, setRelatedDoctor] = useState([]);

  useEffect(() => {
    const relatedDoc = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
    setRelatedDoctor(relatedDoc)
    console.log("related Doctors ::", relatedDoctor);
  }, [docId, speciality,])

  return (
    <div>
      <div className="flex flex-col items-center gap-4 mt-14 md:mx-10">
        <h1 className="text-center text-3xl font-medium text-gray-800">
          Related Doctors
        </h1>
        <p className="sm:w-1/2 text-sm text-center">
          Simply browse through our extensive list of trusted doctors.
        </p>
        <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
          {relatedDoctor.slice(0, 5).map((item, index) => (
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
        <button
          onClick={() => navigate("/doctors")}
          className="px-14 mt-5 py-3 rounded-full bg-green-100 text-sm">
          more
        </button>
      </div>
    </div>
  )
}

export default RelatedDoctor