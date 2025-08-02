import  { useState } from "react";
import UserCard from "../components/UserCard";

const EditProfile = ({user}) => {
  const [firstName, setFirstName] = useState("Rishabh");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  
  return (
    <div className="flex justify-center">
      <div className="mr-3 gap-x-4 h-min overflow-clip  border-black border-4  w-[300px] m-2 p-5  ">
        <h1 className="mb-2 text-center text-2xl font-bold ">
          Profile Picture
        </h1>
        <UserCard user={user} />
      </div>
      <div className="mr-3 gap-x-4 h-min overflow-clip  border-black border-4  w-[300px] m-2 p-5  ">
        <h1 className="mb-2 text-center text-2xl font-bold ">Edit Profile</h1>
        {/* label for first name */}
        <label>
          <div>
            <p>First Name:</p>
            <input
              type="text"
              value={firstName}
              className="border-2"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </label>
        {/* label for emailId */}
        <label>
          <div>
            <p>EmailId:</p>
            <input
              type="text"
              value={emailId}
              className="border-2"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>
        </label>
        {/* label for password */}
        <label>
          <div>
            <p>Password:</p>
            <input
              type="text"
              value={password}
              className="border-2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </label>
        {/* label for about */}
        <label>
          <div>
            <p>About:</p>
            <input
              type="text"
              value={about}
              className="border-2"
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>
        </label>
        {/* label for photourl */}
        <label>
          <div>
            <p>Photo Url:</p>
            <input
              type="text"
              value={photoUrl}
              className="border-2"
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default EditProfile;
