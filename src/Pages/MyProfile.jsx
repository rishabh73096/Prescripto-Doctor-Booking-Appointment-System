import { useState } from "react";
import { assets } from "../assets/assets";

function MyProfile() {
  const [userProfile, setUserProfile] = useState({
    name: "Rishabh Tiwari",
    image: assets.profile_pic,
    email: "rishabhtiwari73096@gmail.com",
    phone: "7309651657",
    address: "48th cross Mumbai",
    gender: "Male",
    dob: "2002-06-05", // Correct format for date input
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <div className="my-8 mx-10">
        <div>
          <img className="" src={userProfile.image} alt="" />
          {isEdit ? (
            <input
              className="border my-5 px-2 w-80 py-1 "
              value={userProfile.name}
              onChange={(e) =>
                setUserProfile((prev) => ({ ...prev, name: e.target.value }))
              }
              type="text"
            />
          ) : (
            <p className="mt-5 mb-1 relative font-medium text-2xl text-gray-700">
              {userProfile.name}
            </p>
          )}
        </div>
        <hr className="w-1/2 mb-3" />
        <p className="font-medium text-gray-600 underline mb-3">
          CONTACT INFORMATION
        </p>
        <div className="flex flex-col gap-3">
          {isEdit ? (
            <input
              className="border px-2 py-1 w-80"
              value={userProfile.email}
              onChange={(e) =>
                setUserProfile((prev) => ({ ...prev, email: e.target.value }))
              }
              type="text"
            />
          ) : (
            <p className="">
              Email id:{" "}
              <span className="mx-5 text-primary">{userProfile.email}</span>
            </p>
          )}
          {isEdit ? (
            <input
              className="border px-2 py-1 w-80"
              value={userProfile.phone}
              onChange={(e) =>
                setUserProfile((prev) => ({ ...prev, phone: e.target.value }))
              }
              type="text"
            />
          ) : (
            <p>
              Phone:{" "}
              <span className="mx-8 text-primary">{userProfile.phone}</span>
            </p>
          )}
          {isEdit ? (
            <input
              className="border px-2 py-1 w-80"
              value={userProfile.address}
              onChange={(e) =>
                setUserProfile((prev) => ({ ...prev, address: e.target.value }))
              }
              type="text"
            />
          ) : (
            <p className="">
              Address: <span className="mx-5">{userProfile.address}</span>
            </p>
          )}
        </div>
        <p className="my-5 font-medium text-gray-600 underline">
          BASIC INFORMATION
        </p>
        <div className="flex items-center gap-3">
          <p>Gender: </p>
          {isEdit ? (
            <select
              className="px-2 py-2 border"
              value={userProfile.gender}
              onChange={(e) =>
                setUserProfile((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userProfile.gender}</p>
          )}
        </div>
        {isEdit ? (
          <input
            className="border my-2 px-10 py-1 w-52"
            type="date"
            value={userProfile.dob}
            onChange={(e) =>
              setUserProfile((prev) => ({ ...prev, dob: e.target.value }))
            }
          />
        ) : (
          <p className="my-4 ">
            DOB: <span className="mx-8 ">{userProfile.dob}</span>
          </p>
        )}
        <div className="flex gap-3 my-5">
          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="px-7 py-2 rounded-full border text-black hover:bg-primary hover:text-white"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="px-7 py-2 rounded-full border text-black hover:bg-primary hover:text-white"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default MyProfile;
