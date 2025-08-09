import axios from "axios";
import { baseUrl } from "../utils/constant";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../features/feedSlice";

function UserCard({ user }) {
  const dispatch = useDispatch();
  if (!user) return <div>No user data available</div>;
  const { _id, firstName, photoUrl, about } = user;

  const handleFeedAction = async (status, userId) => {
    try {
      await axios.post(
        baseUrl + "/request/send/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId))
    } catch (error) {
      console.log("Error :", error);
    }
  };

  return (
    <div className="flex justify-center items-center border rounded bg-gray-700">
      <div className="card w-full max-w-md shadow-lg rounded-lg">
        <figure className="h-80 w-80 overflow-hidden rounded-t-lg">
          <img
            src={photoUrl}
            alt="userPhoto"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body w-full bg-gray-800 p-3">
          <p className="card-title text-white text-xl font-semibold mb-2 break-words line-clamp-1">
            {firstName}
          </p>

          <div className="max-h-20 overflow-y-auto mb-2">
            <p className="text-white font-semibold  break-words">{about}</p>
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={()=> handleFeedAction("ignored",_id)} >Ignore</button>
            <button className="btn btn-secondary" onClick={()=> handleFeedAction("interested",_id)} >Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
