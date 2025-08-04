import  { useState } from "react";
import UserCard from "./UserCard";

const EditProfile = ({user}) => {
  console.log(user)
  const [firstName, setFirstName] = useState(user.firstName);
  const [emailId, setEmailId] = useState(user.emailId);
  const [about, setAbout] = useState(user.about);
  const [gender,setGender] = useState(user.gender)
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  
  return (
    <div className="flex h-screen justify-center">
      <div className="mr-3 gap-x-4 h-min overflow-clip bg-gray-800 border-black border-2  w-auto m-2 p-5  ">
        <h1 className="mb-5 text-center text-white text-2xl font-bold ">
          Profile Picture
        </h1>
        <UserCard user={user} />
      </div>
      <div className="mr-3 gap-x-4 h-min bg-gray-900 overflow-clip border-3  w-auto m-2 p-6  ">
        <h1 className="mb-4 text-center text-2xl text-white font-bold ">Edit Profile</h1>
        {/* label for first name */}
        <label>
          <div>
            <p className="font-bold m-1 text-white " >First Name:</p>
            <input
              type="text"
              value={firstName}
              className="border-2 border-black bg-gray-800 p-2 text-white "
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </label>
        {/* label for emailId */}
        <label>
          <div>
            <p className="font-bold m-1 text-white "  >EmailId:</p>
            <input
              type="text"
              value={emailId}
              className="border-2 border-black bg-gray-800 p-2 text-white"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>
        </label>
        {/* label for about */}
        <label>
          <div>
            <p className="font-bold m-1 text-white " >About:</p>
            <input
              type="text"
              value={about}
              className="border-2 border-black bg-gray-800 p-2 text-white"
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>
        </label>
          {/* label for gender */}
        <label>
          <div>
            <p className="font-bold m-1 text-white " >Gender:</p>
            <input
              type="text"
              value={gender}
              className="border-2 border-black bg-gray-800 p-2 text-white "
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
        </label>
        {/* label for photourl */}
        <label>
          <div>
            <p className="font-bold text-white m-1 " >Photo Url:</p>
            <input
              type="text"
              value={photoUrl}
              className="border-2 border-black bg-gray-800 p-2 text-white "
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default EditProfile;
