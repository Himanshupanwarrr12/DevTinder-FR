import EditProfile from "../components/EditProfile";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((store) => {
    console.log("user store:",store.user)
    return store.user;
  });
  console.log(user)
  //checking if user is not present
  if (!user)
    return (
      <div className="text-center p-20 font-bold text-red-700 text-3xl">
        Loading Profile...
      </div>
    );
  return <EditProfile user={user} />;
}

export default Profile;
