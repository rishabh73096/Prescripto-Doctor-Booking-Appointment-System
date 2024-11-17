import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function MyAppointment() {
  const { doctors } = useContext(AppContext);
  return (
    <div>
      <p className="font-medium mt-10 border-b pb-3">My appointments</p>
      <div>
        {doctors.slice(0, 3).map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
            >
              <div>
                <img className="w-32 bg-indigo-50" src={item.image} alt="" />
              </div>
              <div className="flex-1 text-sm text-zinc-700">
                <p className="text-neutral-800 font-semibold">{item.name}</p>
                <p className="underline">{item.speciality}</p>
                <p className="mt-1 font-bold">Address : </p>
                <p className="mt-1 font-medium text-zinc-600">
                  {item?.address?.line1}
                </p>
                <p className=" font-medium text-zinc-600">
                  {item?.address?.line2}
                </p>
                <p className="pt-2">
                  <span>Date & Time : </span> 25, July, 2024 | 8:30 PM
                </p>
              </div>
              <div className="flex flex-col gap-2 justify-end">
                <button className="px-5 py-2 border text-black hover:bg-primary hover:text-white duration-300">
                  Pay Online
                </button>
                <button className="px-5 py-2 border hover:bg-red-500 hover:text-white duration-300">
                  Cancel Appoinmet
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyAppointment;
