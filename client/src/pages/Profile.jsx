import React, { useState } from "react";
import toast from "react-hot-toast";
import { FiUpload } from "react-icons/fi";
import { useAuthContext } from "../context/AuthContext";
import coverPhoto from "../assets/images/ProfilePage/temp_coverphoto_profilepage.jpg";
import profilePhoto from "../assets/images/ProfilePage/boypic.png";
import useLogout from "../hooks/useLogout";
import GamePreferenceSkills from "../components/GamePreferenceSkills";

function Profile() {
  const { authUser } = useAuthContext();
  const { logout } = useLogout();

  console.log(authUser)

  const [selectedSection, setSelectedSection] = useState(
    "Game Preference & Skills"
  );
  const [coverImage, setCoverImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      if (type === "cover") {
        setCoverImage(file);
      } else if (type === "profile") {
        setProfileImage(file);
      }
    }
  };

  const handleFileUpload = async (file, type) => {
    const formData = new FormData();
    formData.append(type === "cover" ? "coverImage" : "profilePic", file);

    try {
      const url =
        type === "cover"
          ? "http://localhost:5000/api/uploads/upload-cover"
          : "http://localhost:5000/api/uploads/upload-profile-pic";

      const response = await fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${authUser.token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const result = await response.json();
      toast.success("Upload successful");
      console.log(result); // Optional: Log result if you need to see server response
    } catch (error) {
      toast.error("Upload failed: " + error.message);
    }
  };

  const handleUploadCover = () => {
    if (coverImage) {
      handleFileUpload(coverImage, "cover");
    }
  };

  const handleUploadProfile = () => {
    if (profileImage) {
      handleFileUpload(profileImage, "profile");
    }
  };

  return (
    <div className="profile-wrapper min-h-[80vh]">
      <div className="cover-photo bg-slate-400 h-72 overflow-hidden relative">
        <img
          src={
            coverImage
              ? URL.createObjectURL(coverImage)
              : authUser.coverImage || coverPhoto
          }
          className="h-full w-full object-cover"
          alt="Cover"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "cover")}
          className="absolute bottom-3 right-4 hidden"
          id="cover-image-input"
        />
        <button
          className="absolute bottom-3 right-4 bg-transparent backdrop-blur-md text-sm px-2 py-1 rounded-lg shadow-md hover:bg-gray-200 transition border-2 border-purple-500 font-semibold text-white tracking-wider"
          onClick={() => document.getElementById("cover-image-input").click()}
        >
          Upload Cover Image
        </button>
      </div>

      <div className="profile-info flex h-32 relative">
        <div className="profile-img w-44 h-44 rounded-full translate-x-10 -translate-y-28 border-4 border-slate-100 overflow-hidden relative">
          <img
            src={
              profileImage
                ? URL.createObjectURL(profileImage)
                : authUser.profilePic || profilePhoto
            }
            alt="Profile-pic"
            className="w-full h-full object-cover"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "profile")}
            className="absolute bottom-5 right-5 hidden"
            id="profile-image-input"
          />
          <button
            className="absolute bottom-5 right-5 border border-slate-700 text-xs px-2 py-1 rounded-full shadow-md hover:bg-gray-200 transition backdrop-blur-md bg-transparent"
            onClick={() =>
              document.getElementById("profile-image-input").click()
            }
          >
            <FiUpload className="text-black" />
          </button>
        </div>

        <div className="profile-data flex flex-col ml-14 mt-4">
          <span className="font-semibold">{authUser.fullName}</span>
          <span className="text-gray-600">@{authUser.username}</span>
          <button
            className="bg-black text-white px-3 py-[0.2rem] rounded-lg mt-4"
            onClick={logout}
          >
            Log out
          </button>
        </div>
        <div className="desc flex-grow ml-16 mt-4">
          <span className="text-lg font-semibold block">Bio/Description:</span>
          <p className="text-stone-100 mt-2">{authUser.description}</p>
        </div>
      </div>

      <div className="flex bg-[#EFEFEF] h-12 items-center justify-evenly rounded-xl shadow-md mt-6 mx-5">
        <p
          className={`font-semibold tracking-wide cursor-pointer px-6 py-1 rounded-lg ${
            selectedSection === "Game Preference & Skills" ? "bg-[#FFFFFF]" : ""
          }`}
          onClick={() => setSelectedSection("Game Preference & Skills")}
        >
          Game Preference & Skills
        </p>
        <p
          className={`font-semibold tracking-wide cursor-pointer px-6 py-1 rounded-lg ${
            selectedSection === "Friend List" ? "bg-[#FFFFFF]" : ""
          }`}
          onClick={() => setSelectedSection("Friend List")}
        >
          Friends
        </p>
        <p
          className={`font-semibold tracking-wide cursor-pointer px-6 py-1 rounded-lg ${
            selectedSection === "Account Settings" ? "bg-[#FFFFFF]" : ""
          }`}
          onClick={() => setSelectedSection("Account Settings")}
        >
          Account Settings
        </p>
      </div>

      <div className="content mt-6">
        {selectedSection === "Game Preference & Skills" && (
          <GamePreferenceSkills />
        )}
        {/* You can add more sections here */}
      </div>
    </div>
  );
}

export default Profile;
