import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctor from "../components/RelatedDoctor";

function Appointments() {
  const [doctorInfo, setdoctorInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  console.log("Day and Date ::",docSlots);
  const { docId } = useParams();
  console.log(docId);
  const { doctors, currency } = useContext(AppContext);
  const dayOfWeek = ['SUN', 'MON', 'TUS', 'WED', 'THU', 'FRI', 'SUT'];

  let doctorId;
  const doctorsInfo = async () => {
     doctorId = await doctors.find((id) => id._id === docId);
    setdoctorInfo(doctorId);
    console.log("doctor details",doctorInfo);
  };

  const getAvailbleSlots = async () => {
    setDocSlots([])

    // getting current Date
    let today = new Date();
    // console.log(today);

    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      // console.log("current Date ::", currentDate);

      // setting endTime of the Date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      // console.log("end Time :: ", endTime);
      endTime.setHours(21, 0, 0, 0);

      // setting hours
      if (today.getDate() === endTime.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + i : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    getAvailbleSlots();
  }, [doctorInfo]);

  useEffect(() => {
    console.log(docSlots);
  },[docSlots])

  useEffect(() => {
    doctorsInfo();
  }, [doctors, docId]);

  return (
  <>
      {
        doctorInfo && (
          <div>
          {/* left Image  */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <div>
              <img
                className="bg-primary w-full rounded-lg sm:max-w-72"
                src={doctorInfo?.image}
                alt=""
              />
            </div>
    
            {/* doctor details */}
            <div className="flex-1 border border-gray-300 rounded-lg p-8 py-7 mx-2  ">
              <div className="flex items-center gap-2">
                <p className="text-2xl text-gray-800 font-medium">
                  Dr. Richard James
                </p>
                <p>
                  <img className="w-4" src={assets.verified_icon} alt="" />
                </p>
              </div>
              <div className="py-2">
                <p>
                  <span className="text-base text-gray-500 font-medium">
                    {doctorInfo?.degree}{" "}
                  </span>{" "}
                  -{" "}
                  <span className="text-base text-gray-500 font-medium">
                    {doctorInfo?.speciality}{" "}
                    <span className="px-5 py-0.5 rounded-full border">
                      {doctorInfo?.experience}
                    </span>
                  </span>
                </p>
              </div>
              <div className="flex gap-2 text-gray-900 font-medium mb-2">
                About{" "}
                <img className="cursor-pointer" src={assets.info_icon} alt="" />
              </div>
              <div>
                <p className="text-gray-600 text-sm pb-3">
                  Dr. Davis has a strong commitment to delivering comprehensive
                  medical care, focusing on preventive medicine, early diagnosis,
                  and effective treatment strategies. Dr. Davis has a strong
                  commitment to delivering comprehensive medical care, focusing on
                  preventive medicine, early diagnosis, and effective treatment
                  strategies.
                </p>
              </div>
              <span className="font-medium text-gray-600">Appointment fee :</span>{" "}
              <span className="font-medium text-black">
                {currency}
                {doctorInfo?.fees}
              </span>
            </div>
          </div>
    
          {/* Booking slots */}
          <div className="sm:ml-72 sm:pl-6 mt-4 font-medium text-gray-600">
            <p className="">Booking Slots</p>
            <div className="flex  gap-3 items-center w-full overflow-x-scroll mt-4">
               {
                docSlots.length && docSlots.map((item, index) => {
                  return (
                    <div onClick={()=>setSlotIndex(index)} className={`text-center min-w-16 py-6 rounded-full cursor-pointer ${slotIndex===index ?'bg-primary text-white':'bg-white border border-gray-300'} `} key={index}>
                      <p>{item[0] && dayOfWeek[item[0].datetime.getDay()]}</p>
                      <p>{item[0] && item[0].datetime.getDate()}</p>
                    </div>
                  )
                })
               }
            </div>
            <div className="flex items-center gap-4 my-5 w-full overflow-x-scroll">
              {/* slot time */}
               {
                docSlots.length && docSlots[slotIndex].map((item,index) => {
                  return (
                    <p onClick={()=>setSlotTime(item.time)} key={index} className={`border border-gray-500 rounded-full cursor-pointer px-5 py-2 flex-shrink-0 ${item.time===slotTime?'bg-primary text-white':'bg-white text-gray-700 border'}`}>{item.time}</p>
                  )
                })
               }
            </div>
          <button className="border outline-none rounded-full bg-primary text-white px-5 py-3">Book an appointment</button>
          </div>
    
          
          {/*  Related Doctors */}
          <RelatedDoctor docId={docId} speciality={doctorInfo.speciality} />
    
        </div>
        )
      }
    </>
  );
}

export default Appointments;
